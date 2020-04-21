/*1.Launch the web browser and launch our practice page https://demoqa.com/tooltip-and-double-click/
2.Find the required element i.e. button in our sample and do right click on the element
3.Go to the options ‘copy’ and  click on it
4.Accept the alert message
5.Close the browser to end the program*/


package RightClick;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import lib.BaseClass;

public class RightClick extends BaseClass 
{

	public RightClick() throws Exception 
	{
		super();
		
	}
	
	@Test
	public void rightClick() throws Exception
	{
		
		
		
		driver.get("https://demoqa.com/tooltip-and-double-click/");
		System.out.println("Site successfully opened:");
		
		WebElement element1=driver.findElement(By.id("rightClickBtn"));
		
		Actions actions=new Actions(driver);
		actions.contextClick(element1).build().perform();
		System.out.println("Right click successfuly done");
		
		
		WebElement element2=driver.findElement(By.xpath("(//div[@id='rightclickItem']/div[2])"));
		element2.click();
		System.out.println("Successfuly clicked on copy me");
		
		driver.switchTo().alert().accept();
		System.out.println("Alert accepted successfully");
		
		
		
		
	}

	
	
	
	
	
}
