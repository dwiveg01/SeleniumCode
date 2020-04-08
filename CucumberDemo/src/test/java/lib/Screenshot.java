package lib;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.NewSessionPayload;

public class Screenshot {
	
	public static String getScreesnhots(WebDriver driver, String screenShotName) throws IOException
	
	{
	
	
	
	try {
		

		File src= ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		String destination="C:\\Users\\Gaurav\\screenshots\\"+new SimpleDateFormat("yyyy_MM_dd_hh_mm_ss").format(new Date());
		
		FileUtils.copyFile(src, new File(destination+screenShotName+".png"));
		return destination;
		
	} catch (Exception e) {
		System.out.println("There is some error in capturing screesnhots"+e.getMessage());
	}
	
	
	return screenShotName;
	}

}
