package com;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import lib.ScreenshotClass;
import lib.generic;

public class Demo1 extends generic {

	public Demo1() throws Exception {
		super();

	}

	@Test
	public void TestCase1() throws IOException, InterruptedException {

		driver.get("https://www.redbus.in/");

		ScreenshotClass.getScreenshots(driver, "HomePage");

		driver.findElement(By.id("i-icon-profile")).click();

		Thread.sleep(25000);

		ScreenshotClass.getScreenshots(driver, "IconPage");

		driver.findElement(By.id("signInLink")).click();

		ScreenshotClass.getScreenshots(driver, "SignInPage");

		WebElement frameElement = driver.findElement(By.className("modalIframe"));
		driver.switchTo().frame(frameElement);

		driver.findElement(By.id("mobileNoInp")).sendKeys("1234");

		Thread.sleep(25000);

		ScreenshotClass.getScreenshots(driver, "LoginPage");
	}

}
