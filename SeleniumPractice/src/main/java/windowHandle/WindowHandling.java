package windowHandle;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import lib.BaseClass;

public class WindowHandling extends BaseClass {

	public WindowHandling() throws Exception {
		super();

	}

	@Test
	public void handleWindow() throws Exception {

		driver.get("http://demo.automationtesting.in/");

		WebElement element = driver.findElement(By.xpath("//button[@id='btn2']"));
		element.click();

		WebElement element1 = driver.findElement(By.xpath("//a[contains(text(),'SwitchTo')]"));

		Actions actions = new Actions(driver);
		actions.moveToElement(element1).build().perform();

		WebElement element2 = driver
				.findElement(By.xpath("//ul[@class='dropdown-menu']//a[contains(text(),'Windows')]"));
		element2.click();

		WebElement element3 = driver.findElement(By.xpath("//a[contains(text(),'Open New Tabbed Windows')]"));
		element3.click();

		WebElement element4 = driver
				.findElement(By.xpath("//div[@id='Tabbed']//button[@class='btn btn-info'][contains(text(),'click')]"));
		element4.click();

		/*
		 *---------- Code for Handling Child window-------*
		 */
		
		Set<String>ids=driver.getWindowHandles();  //First Step: get all the windows
		Iterator<String>it=ids.iterator();         //2nd step  :Iterate to the child window
		String parentId=it.next();                 //3rd Step  :Storing Parent window id.
		String ChildId=it.next();                  //4th Step  :storing Child window id.
		
		System.out.println(parentId);
		System.out.println(ChildId);
		driver.switchTo().window(ChildId);
		System.out.println(driver.getTitle());
		
		
		
		WebElement element5 = driver.findElement(By.xpath("//ul[@class='nav navbar-nav navbar-right']//a[contains(text(),'Download')]"));
		
	   element5.click();

	}

}
