package lib;

import java.io.File;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class Utility {
	
	public static String getSreenshot(WebDriver driver, String screenshotName) throws Exception{
	
	try{
		File src= ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		String destination=("C:\\Users\\Gaurav\\Desktop\\Screenshots")+new SimpleDateFormat("yyyy_MM_dd_hh_mm_ss").format(new Date());
		FileUtils.copyFile(src, new File( destination+screenshotName+".png"));
		return destination;
	}
	
	catch(Exception e) {
		System.out.println("There is some issue in capturing screenshot"+e.getMessage());
	}
	return screenshotName;
		
		
		
		
		

		
	}}
	
	

