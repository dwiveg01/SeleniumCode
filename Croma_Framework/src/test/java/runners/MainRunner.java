package runners;
import java.util.*;
import org.apache.commons.io.FileUtils;
import org.junit.experimental.ParallelComputer;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
import util.CommonUtil;
import util.DBConn;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;

import static util.DBConn.DBConn;
import static util.FrameworkUtil.getFilesInPackage;

public class MainRunner {

    public static void main(String a[]){

        try {

//            ********************************* Read & Modify Feature File Dynamically *********************************


            String[] featureFiles = getFilesInPackage("./src/test/resources/features");  // Get all the feature files

            File cleaupDir = new File("./src/test/resources/finalFeatures"); // delete all files inside finalFeatures before modifying
            FileUtils.cleanDirectory(cleaupDir);
            // Iterating through features
            for(String feature : featureFiles)
            {
                File sourceFile = new File("./src/test/resources/features/"+feature);
                FileInputStream fis = new FileInputStream(sourceFile);
                byte[] data = new byte[(int) sourceFile.length()];
                fis.read(data);
                fis.close();

                String str = new String(data, "UTF-8");
                String finalStr = "";
                finalStr += str.substring(0,str.indexOf("Scenario:"));
                str = str.substring(str.indexOf("Scenario:"),str.length());
                String[] scenarioes = str.split("Scenario:");
                // Iterating through scenario
                for(int scn=1;scn<scenarioes.length;scn++)
                {
                    String scenario = scenarioes[scn];
                    System.out.println("Current Scenario:"+"\n"+scenario);
                    String scName = scenario.substring(scenario.indexOf("TC#"),scenario.indexOf("\n"));
                    System.out.println("Scenario ID:"+scName);
                    scenario = scenario.replace(scName,"");
                    scenario = scenario.replace("Given","SplitPosition");
                    scenario = scenario.replace("When","SplitPosition");
                    scenario = scenario.replace("And","SplitPosition");
                    scenario = scenario.replace("Then","SplitPosition");
                    scenario = scenario.replace("But","SplitPosition");

                    // Splitting the scenario into steps
                    String[] scenarioSteps = scenario.split("SplitPosition");
                    ArrayList<String> listOfStep = new ArrayList<>();
                    // ArrayList of steps creation
                    for(int step=1;step<scenarioSteps.length;step++)
                    {
                        listOfStep.add(scenarioSteps[step].trim());
                    }

                    // Fetch all steps from Database

                    String fetchStepQuery = "select  \"Step_Name\" from \"DEV\".\"Step_Map\";";
                    ArrayList<HashMap<String,String>> arrayListOfStepsMap = DBConn(fetchStepQuery);
                    ArrayList<String> listOfDSteps = new ArrayList<>();
                    // ArrayList of Database steps creation
                    for(HashMap<String,String> dbStepMap:arrayListOfStepsMap)
                    {
                        listOfDSteps.add(dbStepMap.get("Step_Name"));
                    }

                    // For each step in Current Scenario check if it is preset in Database or not
                    for(String step:listOfStep)
                    {
                        if(!listOfDSteps.contains(step))
                        {
                            String method = CommonUtil.getMethod(step);  // Get the Method name
                            if (method.length()>1) {
                                method = method.substring(0,1).toLowerCase() + method.substring(1) ;
                                System.out.println("Method:"+method);
                                String table = CommonUtil.getTableName("./src/test/java/stepDefinitions/",method);
                                String stepQuery = "insert into  \"DEV\".\"Step_Map\" (\"Step_Name\",\"Table\") values (?,?);";
                                if(!table.equals(""))
                                DBConn.insertStep(stepQuery,table,step.trim()); // Insert missing steps of current scenario
                            }

                        }
                    }
                    // Query to get unique Table name in Step_Map table
                    String uniqueQuery = "select distinct \"Table\" from \"DEV\".\"Step_Map\";";
                    // Fetch the unique Table name
                    ArrayList<HashMap<String,String>> arrayListOfTable = DBConn(uniqueQuery);
                    // Creating List of all required Column data
                    ArrayList<HashMap<String,String>> arrayListAllColData = new ArrayList<>();
                    // Iterate through individuals table
                    for(HashMap<String,String> dbTableMap:arrayListOfTable)
                    {
                        String table = dbTableMap.get("Table");
                        // Query to fetch Table name wise steps
                        String query = "select \"Step_Name\" from \"DEV\".\"Step_Map\" where \"Table\"=" +"'"+table+"';";
                        // Fetch Table name wise steps
                        ArrayList<HashMap<String,String>> arrayListOfDBStepMap = DBConn(query);

                        // List of consolidated column
                        ArrayList<String> columnsToFetch = new ArrayList<>();

                        String colsDataQuery = "select ";
                        // Iterate through Table wise filtered DB Steps
                        for(HashMap<String,String> dbStepMap:arrayListOfDBStepMap)
                        {
                            // Get the DB step
                            String stepName = dbStepMap.get("Step_Name");
                            // Check if this step is present in the current scenario
                            if(listOfStep.contains(stepName))
                            {
                                // split the step
                                String [] words = stepName.split(" ");
                                // Get the column name if it is present in the step
                                for(String word:words)
                                {
                                    if(word.contains("<"))
                                    {
                                        String column = word.substring(word.indexOf("<")+1,word.indexOf(">"));
                                        columnsToFetch.add(column);
                                        CommonUtil.arrayListAllCol.add(column);
                                    }
                                }
                            }
                        }
                        // Add the column name to form the query
                        for(int col=0;col<columnsToFetch.size();col++)
                        {
                            if(col==columnsToFetch.size()-1)
                            {
                                colsDataQuery = colsDataQuery+ "\"" + columnsToFetch.get(col) + "\"";
                            }else{
                                colsDataQuery =colsDataQuery+ "\"" + columnsToFetch.get(col) + "\",";
                            }
                        }
                        if(columnsToFetch.size()>0) {
                            // Query to fetch required column data for a particular scenario
                            colsDataQuery += " from \"DEV\".\"" + table + "\" where \"Scenario_Id\" like '"+scName.trim()+"%';";

                            ArrayList<HashMap<String,String>> arrayListColData = DBConn(colsDataQuery);
                            if(arrayListAllColData.size()<1) {
                                for (HashMap<String, String> colData : arrayListColData) {
                                    arrayListAllColData.add(colData);
                                }
                            }else {
                                for (int item = 0; item < arrayListColData.size(); item++) {
                                    HashMap<String,String> map = arrayListColData.get(item);
                                        for(Map.Entry<String,String> hmap : map.entrySet()){
                                            arrayListAllColData.get(item).put(hmap.getKey(),hmap.getValue());
                                        }
                                }
                            }

                        }
                    }
                    // Add the data to make final Scenario with examples data
                    finalStr += "\nScenario Outline:"+scenarioes[scn]+"\n"+"Examples: "+"\n\n"+CommonUtil.getFinalSecnario(arrayListAllColData);
                    CommonUtil.arrayListAllCol.clear();
                }
                // Write the final Feature to finalFeatures directory
                File destiationFile = new File("./src/test/resources/finalFeatures/"+feature);
                FileWriter fw = new FileWriter(destiationFile);
                BufferedWriter bw = new BufferedWriter(fw);
                bw.write(finalStr);
                bw.flush();
                bw.close();
            }



//             ********************************* Code to invoke Cucumber CLI Runner *********************************
/*            //String[] argv = new String[]{"-g", "", "./src/test/features/MPOS.feature"};
            String[] argv = new String[]{};
            ClassLoader contextClassLoader = MPOS_Runner.class.getClassLoader();
            byte exitstatus = Main.run(argv, contextClassLoader);*/


//             *************************** Code to invoke CucumberRunner as JUnit Test *****************************
            Result result = JUnitCore.runClasses(CucumberRunner.class);
//            Class[] cls = { MyTest1.class, MyTest2.class };
//            Result result = JUnitCore.runClasses(ParallelComputer.classes(), cls);
            //Result result = JUnitCore.runClasses(MyTests.class);
            for (Failure failure : result.getFailures()) {
                System.out.println(failure.toString());
            }

/*            Thread.sleep(6000);
            CucumberDetailedResults rep = new CucumberDetailedResults();
            rep.setOutputDirectory("target");
            rep.setSourceFile("target/reports/cucumber.json");
            rep.setScreenShotLocation("target/screenshots");
            rep.setScreenShotWidth("900px");
            rep.execute();*/
         }
        catch(Exception ex){
            ex.printStackTrace();
        }
    }
}
