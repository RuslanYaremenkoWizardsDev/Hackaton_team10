package entities;

import Core.DriverFactory;
import Interfaces.IAuthPage;
import lombok.Getter;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

@Getter
public class AuthorizationPage implements IAuthPage {
    public AuthorizationPage() {
        PageFactory.initElements(DriverFactory.getDriver(), this);
    }

    @FindBy(css = "body > header > img")
    private WebElement icon;
    @FindBy(css = "body > div > div")
    private WebElement formAuth;
    @FindBy(name = "login")
    private WebElement inputLogin;
    @FindBy(name = "password")
    private  WebElement inputPassword;
    @FindBy(id = "submit-auth")
    private WebElement buttonSignIn;
    @FindBy(css = "body > div > div > form > div:nth-child(7)")
    private WebElement textSignUp;
    @FindBy(css = "body > div > div > form > div:nth-child(7) > a")
    private WebElement linkSignUp;
    @FindBy(css = "body > div > div > form > div.box-auth__redirect.box-auth__redirect--guess")
    private WebElement textGuess;
    @FindBy(css = "#guest")
    private WebElement linkGuess;
    @FindBy(css = "#submit-reg")
    private WebElement buttonSignUp;
    @FindBy(css = "body > div > div > div > p")
    private WebElement errorText;
}
