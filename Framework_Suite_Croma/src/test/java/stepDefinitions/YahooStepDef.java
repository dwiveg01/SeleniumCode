package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import gherkin.lexer.It;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.sql.Driver;
import static runners.CucumberRunner.*;


import static util.DriverUtil.*;
import static util.ElementUtil.*;
import static util.FrameworkUtil.*;
import static util.ScenarioUtil.*;

public class YahooStepDef  {


    @Given("^Yahoo homepage is open$")
    public void yahooHomepageIsOpen() throws InterruptedException {
        System.out.println("Inside 'Yahoo homepage is open' >> Scenario:: "+getScenario().getName());
        System.out.println("YAHOO:: THREAD ID : " + Thread.currentThread().getId() + "  ;;  THREAD NAME : " + Thread.currentThread().getName());
        System.out.println("YAHOO:: Driver: "+ getDriver().hashCode());
         getDriver().get("https://in.yahoo.com/");
        //Thread.sleep(3000);
        getElement("SearchBox").click();
        captureScreen();
    }

    @When("^Enter \"(.*)\" in Yahoo Search box$")
    public void enterInYahooSearchBox(String arg0) throws Throwable {
        System.out.println("Inside 'Enter text in Yahoo Search box'");
        System.out.println("YAHOO:: THREAD ID : " + Thread.currentThread().getId()+ " ;; Driver: "+ getDriver().hashCode());
        getElement("SearchBox").sendKeys(arg0);
        captureScreen();
        getElement("SearchBox").sendKeys(Keys.ENTER);

    }

    @Then("^Yahoo displays relevant search result$")
    public void yahooDisplaysRelevantSearchResult() {
        System.out.println("Inside 'Yahoo displays relevant search result'");
        System.out.println("YAHOO:: THREAD ID : " + Thread.currentThread().getId()+ " ;; Driver: "+ getDriver().hashCode());
        System.out.println("YAHOO RESULT:: " + getElement("ResultTxt").isDisplayed());
        captureScreen();

    }
}
