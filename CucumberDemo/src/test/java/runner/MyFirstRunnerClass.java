package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions (
		features= {"src/test/resources/com/basic/firstFeatureFileFF"},
		glue= {"stepDef"},
		plugin= { "pretty",
				"html:target/cucumberhtmlreport",
				"json:target/cucumber-reportjson"
				},
				
		
		monochrome=true,
		dryRun=false,
		strict=true
		
		
		)
	

public class MyFirstRunnerClass 
{

}
