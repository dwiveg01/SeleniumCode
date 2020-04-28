package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import util.ElementUtil;
import static org.assertj.core.api.Assertions.*;
import java.io.IOException;
import com.github.mkolisnyk.cucumber.assertions.LazyAssert;


import static util.DriverUtil.*;
import static util.ElementUtil.*;
import static util.FrameworkUtil.*;
import static util.ScenarioUtil.*;
import static util.LoggerUtil.*;
import static util.SoftAssertUtil.*;

public class BingStepDef {

    @Given("^Bing homepage is open$")
    public void bingHomepageIsOpen() throws InterruptedException {
       // Thread.sleep(3000);
        System.out.println("Inside Bing >> Scenario:: "+getScenario().getName());
        System.out.println("Bing:: THREAD ID : " + Thread.currentThread().getId()+ " ;; Driver: "+getDriver().hashCode());

        getDriver().get("https://www.bing.com/");

        getElement("SearchBox").click();
        captureScreen();

    }

    @When("^Enter \"([^\"]*)\" in Bing Search box$")
    public void enterInBingSearchBox(String arg0) throws Throwable {


        getElement("SearchBox").sendKeys(arg0);

        captureScreen();

        getElement("SearchBox").sendKeys(Keys.ENTER);

        System.out.println("Bing:: THREAD ID : " + Thread.currentThread().getId() + "  ;;  THREAD NAME : " + Thread.currentThread().getName()+ " ;; Driver: "+getDriver().hashCode());

        LazyAssert.assertEquals("Search box Exist?" , true , getElement("SearchBox").isDisplayed() );

    }

    @Then("^Bing displays relevant search result$")
    public void bingDisplaysRelevantSearchResult() throws InterruptedException {

        System.out.println("Bing:: THREAD ID : " + Thread.currentThread().getId() + " ;; Driver: "+getDriver().hashCode());
/*
        //************** AssertJ Assertion **************
        assertThat(getElement("ResultCount").isDisplayed())
                .describedAs("Bing Result Page is not displayed")
                .isEqualTo(true);
*/

        /************** Lazy Assert **************/
        LazyAssert.assertEquals("Bing Result Page is not displayed",
                true, getElement("ResultCount").isDisplayed());

        captureScreen();

    }
}
