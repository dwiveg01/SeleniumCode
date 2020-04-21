package com;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import lib.BaseClass;
import lib.Screenshot;

public class Demo extends BaseClass{

	public Demo() throws Exception {
		super();
		
	}
	
	@Test
	public void TestCase1() throws InterruptedException, IOException
	{
		driver.get("https://www.redbus.in/");
		
		Screenshot.getScreesnhots(driver, "HomePage");

		driver.findElement(By.id("i-icon-profile")).click();

		driver.findElement(By.id("signInLink")).click();
		
		Screenshot.getScreesnhots(driver, "SignInPage");

		Thread.sleep(5000);
		WebElement frameElement = driver.findElement(By.className("modalIframe"));
		driver.switchTo().frame(frameElement);

		driver.findElement(By.id("mobileNoInp")).sendKeys("1234");
		
		Thread.sleep(25000);
		
		Screenshot.getScreesnhots(driver, "LoginIn");

	}
	
	

}
