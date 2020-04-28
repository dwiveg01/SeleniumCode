package util;

import cucumber.api.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;


public class ScenarioUtil  {

    private static ScenarioUtil instance;
    private HashMap<String, Scenario> scenarioMap;

    private ScenarioUtil(){}

    private static synchronized ScenarioUtil getInstance(){

        if(instance==null){
            instance = new ScenarioUtil();
            instance.scenarioMap = new HashMap<String,Scenario>();
            System.out.println("ScenarioUtil instantiated...");
        }

        return instance;
    }

    public static synchronized void setScenario(Scenario scn){

        getInstance();
        String t = String.valueOf(Thread.currentThread().getId());
        System.out.println("Inside setScenario >> Thread Id: " + t);
        if( ! instance.scenarioMap.containsKey(t)){
            instance.scenarioMap.put( t , scn);
        }

    }

    public static Scenario getScenario(){

        getInstance();
        String t = String.valueOf(Thread.currentThread().getId());
        System.out.println("Inside getScenario >> Thread Id: " + t);
        return instance.scenarioMap.get(t);
    }

    public static synchronized Boolean removeScenario(){

        Boolean flag = false;
        String t = String.valueOf(Thread.currentThread().getId());
        if( instance.scenarioMap.containsKey(t)){
            flag = true;
            instance.scenarioMap.remove(t);
            System.out.println("Scenario instance removed for Thread id: "+t);
        }
        return flag;
    }

}
