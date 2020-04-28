package util;

import org.apache.commons.configuration.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

public class ConfigHandler {


    public static String configReader(String file, String key) {

        String val = "";

        try {
            // "./src/main/config/config.properties"
            PropertiesConfiguration config = new PropertiesConfiguration(file);

            val = (String) config.getProperty(key);

            System.out.println("Output from ConfigReader ::  " + key + " == " + val);

            //return prop.getProperty(key);

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return val;

    }

    public static void configWriter(String filePath, String key, String value) {

        try {

            PropertiesConfiguration config = new PropertiesConfiguration(filePath);

            config.setProperty(key, value);

            config.save();

            System.out.println("Output from ConfigWriter ::  " + key + " == " + configReader(filePath, key));

        } catch (Exception ex) {
            ex.printStackTrace();
        }


    }


    public static HashMap<String, String> configIterator(String fileName) {

        HashMap<String, String> propMap = new HashMap<>();
        try {
            PropertiesConfiguration config = new PropertiesConfiguration(fileName);
            PropertiesConfigurationLayout layout = config.getLayout();

            Set<String> keys = layout.getKeys();
            for (String k : keys) {
                String value = layout.getConfiguration().getProperty(k).toString();
                if(value.endsWith("]") && value.startsWith("[")){
                    value = value.substring(1,value.length()-1);
                }
                //String value = configReader(fileName,k);
                System.out.println("KEY: " + k + "  ;;  VALUE: "+value);
                propMap.put(k, value);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        System.out.println("Property file read for : "+ fileName);
        return propMap;
    }

}