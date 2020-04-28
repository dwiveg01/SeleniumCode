package runners;


import com.github.mkolisnyk.cucumber.runner.*;
import cucumber.api.CucumberOptions;
//import cucumber.api.Scenario;
//import io.github.bonigarcia.wdm.WebDriverManager;
//import org.assertj.core.api.SoftAssertions;
import org.junit.runner.RunWith;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.FindBy;


@RunWith(ExtendedParallelCucumber.class)
@ExtendedCucumberOptions(jsonReport = "reports/cucumber.json",
        //retryCount = 1,
        threadsCount = 2,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        coverageReport = true,
        screenShotLocation = "./screenshots",
        screenShotSize = "900px",
        jsonUsageReport = "reports/cucumber-usage.json",
        usageReport = false,
        toPDF = true,
        pdfPageSize = "landscape",
        excludeCoverageTags = {"@flaky" },
        includeCoverageTags = {"@passed" },
        outputFolder = "reports/ExtendedCucumber")

@CucumberOptions(plugin = { "html:reports/cucumber-html-report",
        "json:reports/cucumber.json", "pretty:reports/cucumber-pretty.txt",
        "usage:reports/cucumber-usage.json", "junit:reports/cucumber-results.xml" },
        features = { "./src/test/resources/features" },
        glue = { "stepDefinitions" },
        dryRun = false )

public class CucumberRunner {

}
