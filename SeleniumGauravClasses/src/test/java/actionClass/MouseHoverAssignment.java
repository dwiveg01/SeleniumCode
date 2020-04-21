package actionClass;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;
import lib.BaseClass;
import lib.MouseAction;

public class MouseHoverAssignment extends BaseClass {

	public MouseHoverAssignment() throws Exception {
		super();

	}

	@Test
	public void mouseHoverassignment() throws Exception {

		WebDriverWait wb = new WebDriverWait(driver, 5);
    	wb.until(ExpectedConditions.elementToBeClickable((By.xpath("(//span[@class='kfi kfi-arrow-triangle-down'])[1]"))));

		WebElement element = driver.findElement(By.xpath("(//span[@class='kfi kfi-arrow-triangle-down'])[1]"));
		MouseAction.mouse_Hover(driver, element);

		wb.until(ExpectedConditions.elementToBeClickable(By.xpath("//nav[@id='site-navigation']//a[contains(text(),'Tools')]")));
		WebElement element1 = driver.findElement(By.xpath("//nav[@id='site-navigation']//a[contains(text(),'Tools')]"));
		MouseAction.mouse_Hover(driver, element1);

		WebElement element2 = driver.findElement(By.xpath("//nav[@id='site-navigation']//a[contains(text(),'Puppeteer')]"));
		element2.click();

	}

}
