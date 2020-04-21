package lib;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseClass {

	public WebDriver driver;

	public BaseClass() throws Exception {

		String browser= "chrome";
		if (browser.equalsIgnoreCase("chrome"))
		{
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--disable-notifications");

			System.setProperty("webdriver.chrome.driver", "C:\\Work\\chromedriver_win32\\chromedriver.exe");
			driver = new ChromeDriver(options);
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			//driver.get("http://executeautomation.com/blog/mouse-hover-click-selenium/");
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//			driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		}

		else if (browser.equalsIgnoreCase("firefox")) 
		{

			driver = new FirefoxDriver();
			System.setProperty("webdriver.gecko.driver", "geckodriver.exe");

			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		}

	}

}
