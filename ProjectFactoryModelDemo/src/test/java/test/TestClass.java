package test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;


import loginPage.LoginPage;

public class TestClass  {

	WebDriver driver;


@Test
public void test() throws Exception {
	
	System.setProperty("webdriver.chrome.driver", "C:\\Work\\chromedriver_win32\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	
	driver.get("https://www.croma.com/");
	
	
    
	LoginPage lp=new LoginPage(driver);
	

	
	lp.signInButton().click();
	
	lp.EmailId().sendKeys("gaurav.dwivedy94@gmail.com");
	
	lp.continueButton().click();
	
	lp.password().sendKeys("8274916769");
	
	lp.logInButtonn().click();
		
}


}
