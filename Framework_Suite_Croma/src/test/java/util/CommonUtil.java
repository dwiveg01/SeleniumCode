package util;
import cucumber.api.java.hu.Ha;
import runners.MainRunner;

import java.io.File;
import java.io.FileInputStream;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static util.ElementUtil.getClassesInPackage;

public class CommonUtil {
    public static ArrayList<String> arrayListAllCol = new ArrayList<>();
    public static String getTableName(String path,String methodName)
    {
        String tableName = "";
        String[] stepDefs = getClassesInPackage(path);  // Get all the stepDefs
        try
        {
            for(String stepDef:stepDefs)
            {
                if(!stepDef.equals("")) {
                    File sourceFile = new File(path + stepDef);
                    FileInputStream fis = new FileInputStream(sourceFile);
                    byte[] data = new byte[(int) sourceFile.length()];
                    fis.read(data);
                    fis.close();
                    String str = new String(data, "UTF-8");
                    if (str.contains(methodName)) {
                        tableName = stepDef.split("StepDef")[0];
                    }
                }
            }
        }catch (Exception ex)
        {
            ex.printStackTrace();
            System.exit(0);
        }
        return tableName;
    }

    public static String getMethod(String step)
    {
        String method="";
       try{
           String words[]=step.trim().split(" ");
           for(int word = 0;word<words.length;word++)
           {
               if(!(words[word].equals("")||words[word].contains("<")))
               {
                   method += words[word]+"_";
               }
           }
           method = method.substring(0,method.length()-1);
        }catch (Exception ex)
        {
            ex.printStackTrace();
            System.exit(0);
        }
        return method;
    }
    public static String getFinalSecnario(ArrayList<HashMap<String,String>> finalListMap)
    {
        String retnurnString = "";
        try {
            for (int col = 0; col < arrayListAllCol.size(); col++) {
                if (col < arrayListAllCol.size() - 1) {
                    retnurnString += "|" + arrayListAllCol.get(col);
                } else {
                    retnurnString += "|" + arrayListAllCol.get(col) + "|\n";
                }
            }
            for (int colData = 0; colData < finalListMap.size(); colData++) {
                HashMap<String, String> map = finalListMap.get(colData);
                for (int col = 0; col < arrayListAllCol.size(); col++) {
                    if (col < arrayListAllCol.size() - 1) {
                        retnurnString += "|" + map.get(arrayListAllCol.get(col));
                    } else {
                        retnurnString += "|" + map.get(arrayListAllCol.get(col)) + "|\n";
                    }
                }
            }
        }catch (Exception ex)
        {
            ex.printStackTrace();
            System.exit(0);
        }
        return retnurnString;
    }
}
