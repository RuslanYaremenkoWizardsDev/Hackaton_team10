package Core;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class DriverFactory {
    public static WebDriver driver = null;

    public static void initialize() {
        getDriver();
        assert driver != null;
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    public static void quit() {
        driver.quit();
    }

    public static WebDriver getDriver() {
        if (driver == null) {
            System.setProperty("webdriver.chrome.driver", "./chromedriver v.90/chromedriver.exe");
            driver = new ChromeDriver();

        }
        return driver;
    }
}