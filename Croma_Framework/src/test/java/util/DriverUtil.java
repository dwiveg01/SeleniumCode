package util;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;


public class DriverUtil  {

    private static DriverUtil instance;
    private  HashMap<String,WebDriver> driverMap;
    //private static long timeStamp;
    //private static Timestamp ts ;
    private DriverUtil(){}

    public static synchronized DriverUtil getInstance(){

        if(instance==null){
            instance = new DriverUtil();
            WebDriverManager.chromedriver().setup();
            instance.driverMap = new HashMap<String,WebDriver>();
            System.out.println("DriverUtil instantiated...");
        }

        return instance;
    }

    public static synchronized WebDriver getDriver(){

        //getInstance();
        String tId = String.valueOf(Thread.currentThread().getId());
        System.out.println("Inside getDriver");
        if( ! instance.driverMap.containsKey(String.valueOf(tId))){

            ChromeOptions options = new ChromeOptions();
            options.addArguments("start-maximized"); // open Browser in maximized mode
            options.addArguments("disable-infobars"); // disabling infobars
            options.addArguments("--disable-extensions"); // disabling extensions
            options.addArguments("--disable-gpu"); // applicable to windows os only
            options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
            options.addArguments("--no-sandbox"); // Bypass OS security model

            instance.driverMap.put(tId , new ChromeDriver(options));

            /*Implicit wait used temporarily*/
            instance.driverMap.get(tId).manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
            instance.driverMap.get(tId).manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

            System.out.println("Inside getDriver >> Driver instance created for Thread id: "+ tId);
        }
        else {System.out.println("Inside getDriver >> Driver is present for Thread: "+ tId);}

        return instance.driverMap.get(tId);
    }

    public static synchronized Boolean removeDriver(long threadId){

        Boolean flag = false;
        if( instance.driverMap.containsKey(String.valueOf(threadId))){
            flag = true;
            instance.driverMap.remove(String.valueOf(threadId));
            System.out.println("Driver instance removed for Thread id: "+threadId);
        }
        return flag;
    }

}
