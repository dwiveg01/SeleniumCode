package util;

import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

public class Logger {

    static org.slf4j.Logger logger = LoggerFactory.getLogger(Logger.class);


    public Logger(String featureName){
        MDC.put("logFileName", featureName);
    }

    public void startTestCase(String scenarioName){

        logger.info("****************************************************************************************");

        logger.info("****************************************************************************************");

        logger.info("$$$$$$$$$$$$$$$$$$$$$                 "+scenarioName+ "       $$$$$$$$$$$$$$$$$$$$$$$$$");

        logger.info("****************************************************************************************");

        logger.info("****************************************************************************************");

    }

    //This is to print log for the ending of the test case

    public void endTestCase(){

        logger.info("XXXXXXXXXXXXXXXXXXXXXXX             "+"-E---N---D-"+"             XXXXXXXXXXXXXXXXXXXXXX");

        logger.info("X");

        logger.info("X");

        logger.info("X");

        logger.info("X");

    }

    public void info(String message) {

        logger.info(message);

    }

    public void warn(String message) {

        logger.warn(message);

    }

    public void error(String message) {

        logger.error(message);

    }


    public void debug(String message) {

        logger.debug(message);

    }

    public void trace(String message) {

        logger.trace(message);

    }


}
