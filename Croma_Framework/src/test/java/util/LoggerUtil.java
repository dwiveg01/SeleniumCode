package util;

import org.slf4j.LoggerFactory;

import java.util.HashMap;

import static util.ConfigHandler.configIterator;
import static util.FrameworkUtil.getFilesInPackage;

public class LoggerUtil {

    private static LoggerUtil instance;
    private static HashMap<String, Logger> logMap;
    private static HashMap<String, String> featureMap;

    private LoggerUtil() {   }

    public static synchronized LoggerUtil getInstance() {

        if (instance == null) {

            instance = new LoggerUtil();
            instance.logMap = new HashMap<String, Logger>();
            instance.featureMap = new HashMap<String, String>();

            System.out.println("LoggerUtil instantiated...");
        } else {
            System.out.println("LoggerUtil not instantiated...");
        }
        return instance;
    }

    public static synchronized void getLogger(String scenarioId) {
        String featureName = "Feature_";
        String rawFeatureName = scenarioId.split(";")[0].replace("-","_");
        featureName = featureName + rawFeatureName.substring(0, 1).toUpperCase() + rawFeatureName.substring(1);
        //featureName = featureName.replace(" ", "_");
        System.out.println("FeatureName : " + featureName);

        if(! logMap.containsKey(featureName)){
            instance.logMap.put(featureName, new Logger(featureName));
        }

        instance.featureMap.put(String.valueOf(Thread.currentThread().getId()), featureName);

        String rawScnName = scenarioId.split(";")[1].replace("-"," ");
        rawScnName = "Scenario Name :: " + rawScnName.substring(0, 1).toUpperCase() + rawScnName.substring(1);
        System.out.println("Scenario Name ::: " + rawScnName);
        startTestCase(rawScnName);

    }

    public static synchronized void removeLogger() {
        instance.logMap.remove(featureMap.get(String.valueOf(Thread.currentThread().getId())));
        featureMap.remove(String.valueOf(Thread.currentThread().getId()));
    }

    public static void startTestCase(String scenarioName) {

        instance.logMap.get(featureMap.get(String.valueOf(Thread.currentThread().getId()))).startTestCase(scenarioName);

    }

    public static void endTestCase() {

        instance.logMap.get(featureMap.get(String.valueOf(Thread.currentThread().getId()))).endTestCase();

    }
    public static void logInfo(String message) {

        instance.logMap.get(featureMap.get(String.valueOf(Thread.currentThread().getId()))).info(message);

    }

    public static void logWarn(String message) {

        instance.logMap.get(featureMap.get(String.valueOf(Thread.currentThread().getId()))).warn(message);

    }

    public static void logError(String message) {

        instance.logMap.get(featureMap.get(String.valueOf(Thread.currentThread().getId()))).error(message);

    }


    public static void logDebug(String message) {

        instance.logMap.get(featureMap.get(String.valueOf(Thread.currentThread().getId()))).debug(message);

    }

    public static void logTrace(String message) {

        instance.logMap.get(featureMap.get(String.valueOf(Thread.currentThread().getId()))).trace(message);

    }


}
