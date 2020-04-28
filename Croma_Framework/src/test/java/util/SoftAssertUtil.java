package util;


import org.assertj.core.api.SoftAssertions;
import java.util.HashMap;


public class SoftAssertUtil {


    private static SoftAssertUtil instance;
    private static HashMap<String, SoftAssertions> assertMap;

    private SoftAssertUtil() {    }

    public static synchronized SoftAssertUtil getInstance() {

        if (instance == null) {

            instance = new SoftAssertUtil();
            instance.assertMap = new HashMap<String, SoftAssertions>();
            System.out.println("SoftAssertUtil instantiated...");
        } else {
            System.out.println("SoftAssertUtil not instantiated...");
        }
        return instance;
    }

    public static synchronized SoftAssertions getAssert() {
        String tId = "";
        try {
            tId = String.valueOf(Thread.currentThread().getId());
            getInstance();
            if( ! instance.assertMap.containsKey(tId)){
                instance.assertMap.put( tId, new SoftAssertions());
                System.out.println("New SoftAssert Object created for thread: "+ tId);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return instance.assertMap.get(tId);

    }

    public static synchronized void assertAll() {
        String tId = "";
        try {
            tId = String.valueOf(Thread.currentThread().getId());

            if( ! instance.assertMap.containsKey(tId)){
                System.out.println("Soft Assertion was never used in current scenario with thread: "+ tId);
            }
            else {
                getAssert().assertAll();
                instance.assertMap.remove(tId);
                System.out.println("Soft Assertion object was removed from thread: "+ tId);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }


    }


}
