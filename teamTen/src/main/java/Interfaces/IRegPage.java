package Interfaces;

import org.openqa.selenium.WebElement;

public interface IRegPage extends IPage{
    WebElement getInputLogin();

    WebElement waitForVisibility(WebElement element, int timeOfWait, int... timeOfTryOut);

    WebElement getInputPassword();

    WebElement getInputConfirmPassword();

    WebElement getButtonSubmit();

    WebElement getErrorMessage();

    WebElement getFormSignIn();

    WebElement getLinkSignIn();

    WebElement getLinkGuest();
}
