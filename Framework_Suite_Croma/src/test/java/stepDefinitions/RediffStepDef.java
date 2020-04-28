package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import java.io.IOException;

import static util.DriverUtil.*;
import static util.ElementUtil.*;
import static util.FrameworkUtil.*;
import static util.ScenarioUtil.*;

public class RediffStepDef {

    @Given("^Rediff homepage is open$")
    public void rediffHomepageIsOpen() throws InterruptedException {
        //Thread.sleep(2000);
        System.out.println("Inside Rediff >> Scenario:: "+getScenario().getName());
        System.out.println("Rediff:: THREAD ID : " + Thread.currentThread().getId()+ " ;; Driver: "+ getDriver().hashCode());
        getDriver().get("https://www.rediff.com/");
        getElement("SearchBox").click();
        captureScreen();
    }

    @When("^Enter \"([^\"]*)\" in Rediff Search box$")
    public void enterInRediffSearchBox(String arg0) throws Throwable {


        getElement("SearchBox").sendKeys(arg0);
        captureScreen();
        getElement("SearchBox").sendKeys(Keys.ENTER);

        System.out.println("Rediff:: THREAD ID : " + Thread.currentThread().getId() + "  ;;  THREAD NAME : " + Thread.currentThread().getName()+ " ;; Driver: "+ getDriver().hashCode());

    }

    @Then("^Rediff displays relevant search result$")
    public void rediffDisplaysRelevantSearchResult() throws InterruptedException {

        Thread.sleep(3000);
        System.out.println("Rediff:: THREAD ID : " + Thread.currentThread().getId() + " ;; Driver: "+ getDriver().hashCode());

        System.out.println("RESULT: " + getElement("ResultTxt").isDisplayed());
        captureScreen();


    }
}
