package lib;

	
	
	

	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.interactions.Actions;

	public class MouseAction
	{
		
		public static Actions actions;

		public static void mouse_Hover(WebDriver driver, WebElement elementToHover)
		{
			actions=new Actions(driver);
			actions.moveToElement(elementToHover).build().perform();
		}
	}



