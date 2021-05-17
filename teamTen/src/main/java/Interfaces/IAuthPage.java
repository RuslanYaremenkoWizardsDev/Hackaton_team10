package Interfaces;

import org.openqa.selenium.WebElement;

public interface IAuthPage extends IPage{

    WebElement getInputLogin();

    WebElement getFormAuth();

    WebElement getInputPassword();

    WebElement getButtonSignIn();

    WebElement getTextSignUp();

    WebElement getTextGuess();

    WebElement getLinkSignUp();

    WebElement getLinkGuess();

    WebElement getButtonSignUp();

    WebElement getErrorText();
}
