package actionClass;




	import java.util.concurrent.TimeUnit;

	import org.openqa.selenium.By;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.chrome.ChromeDriver;
	import org.openqa.selenium.interactions.Actions;
	import org.testng.annotations.Test;

import lib.BaseClass;
import lib.MouseAction;

	public class MouseHover extends BaseClass
	{

		
		
		public MouseHover() throws Exception
		{
			super();
			// TODO Auto-generated constructor stub
		}

		@Test
		public void mouseHover() throws Exception
		{
			
			driver.get("https://artoftesting.com/mouse-hover-in-selenium-webdriver-java");
//			Thread.sleep(5000);
			
			WebElement element=driver.findElement(By.linkText("Automation"));
			MouseAction.mouse_Hover(driver, element);
			Thread.sleep(3000);
			driver.findElement(By.linkText("Selenium Tutorial")).click();
		}

	}



