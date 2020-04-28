package util;

import cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.function.Function;

import static util.DriverUtil.*;
import static util.ScenarioUtil.*;
//import static runners.MPOS_Runner.driver;
//import static runners.MPOS_Runner.scn;


public class FrameworkUtil {
    /*
       public static WebDriver driver;
       private static FrameworkUtil frame = null ;
      private Scenario scn ;
       public FrameworkUtil(WebDriver driver, Scenario sc) {
           this.driver = driver;
           this.scn = sc ;
       }*/
/*
    private FrameworkUtil(){   driver = new ChromeDriver();    }

   public static FrameworkUtil getFrame(){
        if(frame==null){
            frame = new FrameworkUtil();
        }
        return frame;
    }*/
    public WebElement fluentWaitUtil(WebDriver driver, By by) {

        final By LocalBy = by;
        Duration totalWait = Duration.ofSeconds(60);
        Duration pollingWait = Duration.ofSeconds(2);

        Wait wait = new FluentWait(driver)
                .withTimeout(totalWait)
                .pollingEvery(pollingWait)
                .ignoring(org.openqa.selenium.NoSuchElementException.class)
                .ignoring(org.openqa.selenium.ElementNotInteractableException.class);

        WebElement foo = (WebElement) wait.until(new Function<WebDriver, WebElement>() {
            public WebElement apply(WebDriver driver) {
                return driver.findElement(LocalBy);
            }
        });

        if (foo.isDisplayed() && foo.isEnabled()) {
            System.out.println("Fluent Wait Success for element:- " + LocalBy);
        }
        return foo;
    }

    public static WebElement masterWait(WebDriver driver, final String xpathLocator, final int timeOut) {

        System.out.println("Inside WebDriverWait >> Element XPATH:- " + xpathLocator);
        WebDriverWait w = new WebDriverWait(driver, timeOut, 250);
        w.ignoring(org.openqa.selenium.NoSuchElementException.class);

        w.until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                System.out.println("Inside WebDriverWait >> BEFORE findElement :: TIME:- " + new Timestamp(System.currentTimeMillis()));
                WebElement e = driver.findElement(By.xpath(xpathLocator));
/*				for(int i=1; i<=timeOut ; i=i+1) {

					 System.out.println("Inside WebDriverWait >> BEFORE findElement");
					 e = driver.findElement(By.xpath(xpathLocator));
					 System.out.println("Inside WebDriverWait >> AFTER findElement");
					 if(e != null && e.isDisplayed() && e.isEnabled()) {  return true;  }
				}*/

                if (e != null && e.isDisplayed() && e.isEnabled()) {
                    System.out.println("Inside WebDriverWait >>  AFTER findElement :: TIME:- " + new Timestamp(System.currentTimeMillis()));
                    return true;
                } else {
                    return false;
                }
            }
        });

        return driver.findElement(By.xpath(xpathLocator));
    }


    public void selectDropDown(WebDriver driver, String value, String xpathLocator, Boolean partialTextFlag) {

        //driver.findElement(By.xpath(xpathLocator)).click();

        if (partialTextFlag) {
            driver.findElement(By.xpath(xpathLocator + "//option[contains(text(),'" + value + "')]")).click();
        } else {
            driver.findElement(By.xpath(xpathLocator + "//option[text()='" + value + "']")).click();
        }
    }

    public void captureScreenToFile(WebDriver driver, String path, String filePrefix) throws IOException {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd_HH.mm.ss");

        File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

        FileUtils.copyFile(src, new File(path + filePrefix + "_" + sdf.format(new Timestamp(System.currentTimeMillis())) + ".png"));

    }

    public static synchronized void captureScreen() {
        try {
   /*         Thread.sleep(5000);
            File screenshot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.FILE);
            //String fileName = scn.getName().replaceAll("[; !@#$%^&()+=]", "_")+ ".png";
            //String fileName = getScenario().getName().replaceAll("[; !@#$%^&()+=]", "_") + ".png";

            //FileUtils.copyFile(screenshot, new File("./screenshots/" + fileName));
            byte[] data = FileUtils.readFileToByteArray(screenshot);
            // byte[] screen = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            getScenario().embed(data, "image/png");
            System.out.println("Screenshot captured at " + new Timestamp(System.currentTimeMillis()));*/


            Thread.sleep(5000);
            File screenshot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.FILE);
            //String fileName = scn.getName().replaceAll("[; !@#$%^&()+=]", "_")+ ".png";
            String fileName = getScenario().getId().replaceAll("[; !@#$%^&()+=]", "_") + ".png";

            FileUtils.copyFile(screenshot, new File("./screenshots/" + fileName));
            byte[] data = FileUtils.readFileToByteArray(screenshot);
            // byte[] screen = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            getScenario().embed(data, "image/png");
            System.out.println("Screenshot captured at " + new Timestamp(System.currentTimeMillis()));
        } catch (Exception ex) {
            ex.printStackTrace();

        }

    }


    public static String[] getFilesInPackage(String packageName) {
        String[] str = null;
        try {
            File folder = new File(packageName);
            File[] listOfFiles = folder.listFiles();
            str = new String[listOfFiles.length];
            String fileName = "";
            System.out.println("listOfFiles.length : " + listOfFiles.length + "  ;;  str.length : " + str.length);
            for (int i = 0; i < str.length; i++) {
                str[i] = "";
                fileName = listOfFiles[i].getName();
                if (listOfFiles[i].isFile()) {
                    System.out.println("File " + fileName);
                    if (!fileName.contains("Hook")) {
                        str[i] = fileName;
                    }

                } else if (listOfFiles[i].isDirectory()) {
                    System.out.println("Directory " + fileName);
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return str;
    }


}
