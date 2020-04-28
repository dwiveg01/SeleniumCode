package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.assertj.core.api.SoftAssertions;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.IOException;
import static runners.CucumberRunner.*;
import static org.assertj.core.api.Assertions.*;

import static util.DriverUtil.*;
import static util.ElementUtil.*;
import static util.FrameworkUtil.*;
import static util.ScenarioUtil.getScenario;

public class GoogleStepDef {


    @Given("^Google homepage is open$")
    public void googleHomepageIsOpen() throws InterruptedException, IOException {

        System.out.println("Inside Google >> Scenario:: "+getScenario().getName());
        System.out.println("Google:: THREAD ID : " + Thread.currentThread().getId()+ " ;; Driver: "+getDriver().hashCode());

        // getDriver().get("http://www.google.co.in");
		getDriver().get(getConfig( "URL"));

        getElement("SearchBox").click();

        captureScreen();

        System.out.println("Google:: THREAD ID : ");
    }


    @When("^Enter \"(.*)\" in Search box$")
    public void enterInSearchBox(String arg0) throws IOException, InterruptedException {

        getElement("SearchBox").sendKeys(arg0);
        captureScreen();
        getElement("SearchBox").sendKeys(Keys.ENTER);

        System.out.println("Google:: THREAD ID : " + Thread.currentThread().getId() + "  ;;  THREAD NAME : " + Thread.currentThread().getName()+ " ;; Driver: "+ getDriver().hashCode());
		
    }


    @Then("^Google displays relevant search result$")
    public void googleDisplaysRelevantSearchResult() throws IOException, InterruptedException {

        System.out.println("Google:: THREAD ID : " + Thread.currentThread().getId() + " ;; Driver: "+getDriver().hashCode());

        /************** AssertJ Assertion **************/
        assertThat(getElement("ResultTxt").isDisplayed())
                .describedAs("Google Result Page is not displayed")
                .isEqualTo(true) ;

        captureScreen();


    }

}
