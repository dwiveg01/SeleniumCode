package loginPage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class LoginPage {
	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(xpath ="//span[@class='liOffcanvas']//a[contains(text(),'Sign in')]")   
	WebElement signInButton;
	
	@FindBy(id="j_username")
	WebElement username;
	
	@FindBy(xpath = "//div[@class='col-md-12 hidden-xs']//button[@id='continue']")
	WebElement continueButton;
	
	
	@FindBy(id="j_password")
	WebElement password;
	
	@FindBy(xpath = "//button[@id='login']")
	WebElement loginButton;
	
	
	public WebElement signInButton()
	{
		return  signInButton;
	}
	
	public WebElement EmailId()
	{
		return  username;
	}
	
	public WebElement continueButton()
	{
		return  continueButton;
	}
	
	public WebElement password()
	{
		return  password;
	}

	
	public WebElement logInButtonn()
	{
		return  loginButton;
	}
}
