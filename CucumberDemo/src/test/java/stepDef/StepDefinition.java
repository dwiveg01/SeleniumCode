package stepDef;

import org.openqa.selenium.By;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import lib.Generic;

public class StepDefinition extends Generic{
	
public StepDefinition() throws Exception {
		super();
		
	}

@Given("the user login to the facebook")
	public void the_user_login_to_the_facebook() throws Exception {
		
		
		
		driver.get("https://www.facebook.com/");
		Thread.sleep(10000);
	   
	}

	@When("he enters {string} as a Username")
	public void he_enters_as_a_Username(String string) {
		
		driver.findElement(By.id("email")).sendKeys("gaurav.dwivedy94@gmail.com");
	  
	}

	@Then("he enters {string} as a password")
	public void he_enters_as_a_password(String string) {
		
		driver.findElement(By.id("pass")).sendKeys("Gaurav");
	  
	}

	@Then("Click on Log In button")
	public void click_on_Log_In_button() {
	  
		driver.findElement(By.xpath("//input[@value='Log In']")).click();
		
		
	}


}
