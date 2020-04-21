/*
1.Launch the web browser and launch our practice page https://demoqa.com/tooltip-and-double-click/
2.Find the required element i.e. button in our sample and do double click on the element
3.Accept the alert message
4.Close the browser to end the program
*/

package doubleClick;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import lib.BaseClass;

public class DoubleClickDemo extends BaseClass {

	public DoubleClickDemo() throws Exception 
	{
		super();
	}
	
	@Test
	public void doubleClick()
	{
		driver.get("https://demoqa.com/tooltip-and-double-click/");
		WebElement element1=driver.findElement(By.id("doubleClickBtn"));
		
		Actions actions=new Actions(driver);
		actions.doubleClick(element1).build().perform();
		System.out.println("Double click done");
		
		
		driver.switchTo().alert().accept();
		System.out.println("Alert accepted successfully");
		
		driver.close();
			
		
		
		
	}
	
	

}
