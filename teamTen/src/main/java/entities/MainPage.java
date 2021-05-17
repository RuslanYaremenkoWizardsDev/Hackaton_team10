package entities;

import Core.DriverFactory;
import Interfaces.IMainPage;
import lombok.Getter;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

@Getter
public class MainPage implements IMainPage {
    public MainPage () {
        PageFactory.initElements(DriverFactory.getDriver(), this);
    }
    @FindBy(css = "log-out")
    private WebElement buttonLogOut;
}
