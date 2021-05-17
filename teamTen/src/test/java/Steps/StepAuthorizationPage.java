package Steps;

import Core.DriverFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class StepAuthorizationPage extends Steps{
    @When("I open authorization page")
    public void iOpenAuthorizationPage() {
        DriverFactory.getDriver().get("http://localhost:5246/");
        DriverFactory.initialize();
    }

    @Then("I check form {string}")
    public void iCheckForm(String sighInForm) {
        iAuthPage.getFormAuth();
    }

    @Then("I check input Login")
    public void iCheckInputLogin() {
        iAuthPage.getInputLogin();
    }

    @And("I check input Password")
    public void iCheckInputPassword() {
        iAuthPage.getInputPassword();
    }

    @And("I check button Sign in")
    public void iCheckButtonSignIn() {
        iAuthPage.getButtonSignIn();
    }

    @And("I check text {string}")
    public void iCheckText(String arg0) {
        iAuthPage.getTextSignUp();
    }

    @Then("I check link {string}")
    public void iCheckLink(String arg0) {
        if (arg0.equals("Sign up")) {
            iAuthPage.getLinkSignUp();
        }
        else if(arg0.equals("Guess")){
            iAuthPage.getLinkGuess();
        }
    }

    @When("I search input {string}")
    public void iSearchInput(String arg0) {
        iAuthPage.getInputLogin();
        
    }

    String inputResult;

    @Then("I enter {string} in input login")
    public void iEnterInInputLogin(String arg0) {
        iAuthPage.getInputLogin().sendKeys(arg0);
        inputResult = arg0;
    }
    
    @And("I check result in input Login")
    public void iCheckResultInInputLogin() {
        Assert.assertEquals(inputResult,iAuthPage.getInputLogin().getAttribute("value"));
    }
    

    @When("I check button Password")
    public void iCheckButtonPassword() {
        
    }

    @Then("I enter {string} in input Password")
    public void iEnterInInputPassword(String arg0) {
        iAuthPage.getInputPassword().sendKeys(arg0);
        inputResult = arg0;
    }


    @And("I check result in input password")
    public void iCheckResultInInputPassword() {
        Assert.assertEquals(inputResult ,iAuthPage.getInputPassword().getAttribute("value"));
    }

    @Then("I click to the button Reg")
    public void iClickToTheButtonReg() {
        iAuthPage.getButtonSignUp().click();
    }

    @When("I search button {string}")
    public void iSearchButton(String arg0) {
        iAuthPage.getButtonSignIn();
    }

    @When("I click to the button Sign In")
    public void iClickToTheButtonSignIn() {
        iAuthPage.getButtonSignIn().click();
    }

    @Then("I search error text {string}")
    public void iSearchErrorText(String arg0) {
        Assert.assertEquals(arg0, iAuthPage.getErrorText().getText());
    }

    @When("I enter valid data in input Login")
    public void iEnterValidDataInInputLogin() {
        iAuthPage.getInputLogin().sendKeys("UserTest1");
    }

    @When("I enter valid data in input Password")
    public void iEnterValidDataInInputPassword() {
        iAuthPage.getInputPassword().sendKeys("1234test");
    }

    @Then("I check that the Main page has opened")
    public void iCheckThatTheMainPageHasOpened() {
        Assert.assertTrue(iMainPage.getButtonLogOut().isDisplayed());
    }


    @Then("I enter invalid data {string} in input Login")
    public void iEnterInvalidDataInInputLogin(String arg0) {
        iAuthPage.getInputLogin().sendKeys(arg0);
    }
}
