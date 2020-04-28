package util;


import org.openqa.selenium.WebElement;

import java.util.HashMap;

import static util.DriverUtil.*;
import static util.ConfigHandler.*;
import static util.FrameworkUtil.*;

public class ElementUtil {

    // INPUT::  StepDef Class Name, Element Name (Same as in Property file)
    // PROCESS:: Get ThreadId & Get Driver Instance from DriverUtil
    // OUTPUT:: getElement returns WebElement ; getElements returns List of WebElements
    //          getCount returns count of WebElements

    private static ElementUtil instance;
    private static HashMap<String, HashMap<String, String>> locatorMap;
    private static HashMap<String, HashMap<String, String>> configMap;
    public static int LongWait, MidWait, ShortWait;

    private ElementUtil() {
    }

    public static synchronized ElementUtil getInstance() {

        if (instance == null) {

            instance = new ElementUtil();

            /* Locator Map Construction */

            String[] str = getFilesInPackage("./src/test/java/stepDefinitions");
            locatorMap = new HashMap<String, HashMap<String, String>>();
            for (String file : str) {
                if (!(file.trim().equals("") || file.trim().equals("Hooks"))) {
                    file = file.replace(".java", ".properties").replace("StepDef", "");
                    locatorMap.put(file, configIterator("./src/test/resources/locators/" + file));
                }
            }


            /* Config Map Construction */


            String[] st = getFilesInPackage("./src/test/resources/config");
            configMap = new HashMap<String, HashMap<String, String>>();
            for (String file : st) {

                configMap.put(file, configIterator("./src/test/resources/config/" + file));

            }

            System.out.println("ElementUtil instantiated...");
        } else {
            System.out.println("ElementUtil not instantiated...");
        }
        return instance;
    }

    public static WebElement getElement(String elementName) {
        String xpath = "";
        try {
            getInstance();
            String callerClass = getCallerClassName();
            String propFile = callerClass.replace("stepDefinitions.", "");
            propFile = propFile.replace("StepDef", "");
            propFile = propFile + ".properties";
            xpath = locatorMap.get(propFile).get(elementName);
            System.out.println("XPATH: " + xpath + " ;; Property File: " + propFile + "  ;; class: " + callerClass);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return masterWait(getDriver(), xpath, 60);
        //return getDriver().findElement(By.xpath(xpath));
    }


    public static String getConfig(String configName) {
        String value = "";
        try {
            getInstance();
			
			for(String file : configMap.keySet()){
				if(configMap.get(file).containsKey(configName)) {
					value = configMap.get(file).get(configName);
					break;
				}
			}
			
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return value;
        
    }
	
    public static synchronized String getCallerClassName() throws Exception {
        StackTraceElement[] stElements = Thread.currentThread().getStackTrace();
        for (int i = 1; i < stElements.length; i++) {
            StackTraceElement ste = stElements[i];
            if (!ste.getClassName().equals(ElementUtil.class.getName()) && ste.getClassName().indexOf("java.lang.Thread") != 0) {
                return ste.getClassName();
            }
        }
        return null;
    }
}
