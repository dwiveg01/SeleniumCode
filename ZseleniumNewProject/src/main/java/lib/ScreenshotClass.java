package lib;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class ScreenshotClass {
	
	
	public static String getScreenshots(WebDriver driver, String screenShotNames) throws IOException
	
	{
	
	try
	
		

		{
			File src = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
			String destination="C:\\Users\\Gaurav\\screenshots"+ new SimpleDateFormat("yyyy_MM_dd_mm_ss").format(new Date());
			
			FileUtils.copyFile(src, new File(destination+screenShotNames+".png"));
			
			return destination;
			
		}
	
	catch (Exception e) {
	
		System.out.println("The error in capturing screenshots:"+e.getMessage());
	}
	return screenShotNames;
	
	
		
	}
	
	
	

}
