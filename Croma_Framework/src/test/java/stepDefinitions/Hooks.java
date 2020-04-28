package stepDefinitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import util.DriverUtil;

import java.util.Set;

import static util.DriverUtil.*;
import static util.ScenarioUtil.*;
import static util.LoggerUtil.*;
import static util.SoftAssertUtil.*;

public class Hooks {
    @Before
    public synchronized void setUp(Scenario sc){

        System.out.println(sc.getId());

        DriverUtil.getInstance();  // Instantiate DriverUtil & initialize driverMap (ONLY FIRST TIME)

         /*Set Scenario for Capture Screenshot*/
        String featureName = "Feature :: ";
        String rawFeatureName = sc.getId().split(";")[0].replace("-"," ");
        featureName = featureName + rawFeatureName.substring(0, 1).toUpperCase() + rawFeatureName.substring(1);
        System.out.println(featureName);

        System.setProperty(String.valueOf(Thread.currentThread().getId()),sc.getName());
        setScenario(sc);


    }
    @After
    public synchronized void wrapUp(Scenario sc){
        getDriver().close();
        removeDriver(Thread.currentThread().getId());
        removeScenario();

        System.out.println(sc.getId());
        String featureName = "Feature :: ";
        String rawFeatureName = sc.getId().split(";")[0].replace("-"," ");
        featureName = featureName + rawFeatureName.substring(0, 1).toUpperCase() + rawFeatureName.substring(1);
        System.out.println(featureName);

    }
}
