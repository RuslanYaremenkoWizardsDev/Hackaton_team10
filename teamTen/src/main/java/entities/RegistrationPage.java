package entities;

import Core.DriverFactory;
import Interfaces.IRegPage;
import lombok.Getter;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

@Getter
public class RegistrationPage implements IRegPage {
    public RegistrationPage() {
        PageFactory.initElements(DriverFactory.getDriver(), this);

    }
    @FindBy(xpath = "/html/body/div/div/form/input[1]")
    private WebElement inputLogin;
    @FindBy(name = "password")
    private WebElement inputPassword;
    @FindBy(css = "body > div > div > form > input:nth-child(7)")
    private WebElement  inputConfirmPassword;
    @FindBy(name = "submit")
    private WebElement buttonSubmit;
    @FindBy(css = "body > div > div > form > div:nth-child(9) > a")
    private WebElement linkSignIn;
    @FindBy(css = "#guest")
    private WebElement  linkGuest;
    @FindBy(css = "body > div > div > div > p")
    private WebElement errorMessage;
    @FindBy(css = "body > div > div")
    private WebElement formSignIn;

    public WebElement waitForVisibility(WebElement element, int timeOfWait, int... timeOfTryOut) {
        WebElement webElement = null;
        int timeOfRevision = timeOfTryOut.length == 0
                ? 100
                : timeOfTryOut[0];
        try {
            webElement = new WebDriverWait(DriverFactory.getDriver(),
                    timeOfWait,
                    timeOfRevision
            ).until(ExpectedConditions.visibilityOf(element));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return webElement;
    }

}
