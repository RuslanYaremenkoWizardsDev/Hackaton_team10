package Steps;

import Core.DriverFactory;
import Interfaces.IRegPage;
import Steps.Steps;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.jupiter.api.Assertions;

public class StepRegistrationPage extends Steps {
    @When("I open registration page")
    public void iOpenRegistrationPage() {
        DriverFactory.getDriver().get("http://localhost:5246/registration.html");
        DriverFactory.initialize();

    }



    @Then("I enter valid data {string} in input Password")
    public void iEnterValidDataInInputPassword(String arg0) {
        iRegPage.waitForVisibility(iRegPage.getInputLogin(), 10);
        iRegPage.getInputPassword().sendKeys(arg0);
    }

    @Then("I enter valid data {string} in input Login")
    public void iEnterValidDataInInputLogin(String arg0) {
        iRegPage.waitForVisibility(iRegPage.getInputLogin(),10).sendKeys(arg0);
    }

    @Then("I enter valid data {string} in input Confirm password")
    public void iEnterValidDataInInputConfirmPassword(String arg0) {
        iRegPage.getInputConfirmPassword().sendKeys(arg0);
    }


    @Then("I click to the button Sign Up")
    public void iClickToTheButtonSignUp() {
        iRegPage.getButtonSubmit().click();
    }

    @And("I search error message {string}")
    public void iSearchErrorMessage(String arg0) {
        Assertions.assertTrue(DriverFactory.driver.getPageSource().contains(arg0));
    }

    @Then("I Enter difference password {string} in input Confirm password")
    public void iEnterDifferencePasswordInInputConfirmPassword(String arg0) {
        iRegPage.waitForVisibility(iRegPage.getInputConfirmPassword(), 10);
        iRegPage.getInputConfirmPassword().sendKeys(arg0);
    }

    @Then("I Enter difference password (.*) in input Confirm password")
    public void iEnterDifferencePasswordConfirmInInputConfirmPassword(String confirm) {
        iRegPage.getInputConfirmPassword().sendKeys(confirm);
    }

    @And("I search error message")
    public void iSearchErrorMessage() {
        iRegPage.getErrorMessage();
        Assert.assertEquals("password does not match",iRegPage.getErrorMessage().getText());
    }

    @Then("I enter valid data (.*) in input Password")
    public void iEnterValidDataPasswordInInputPassword(String password) {
        iRegPage.getInputPassword().sendKeys(password);
    }

    @And("I enter valid data (.*) in input Confirm password")
    public void iEnterValidDataConfirmInInputConfirmPassword(String confirm) {
        iRegPage.getInputConfirmPassword().sendKeys(confirm);
    }


    @When("I enter not valid data (.*) in input Login")
    public void iEnterNotValidDataLoginInInputLogin(String login) {
        iRegPage.getInputLogin().sendKeys(login);
    }

    @Then("I check form Sign In")
    public void iCheckFormSignIn() {
        iRegPage.waitForVisibility(iRegPage.getFormSignIn(), 10);
    }

    @Then("I check form Sign Up")
    public void iCheckFormSignUp() {
        iRegPage.getFormSignIn();
    }

    @Then("I check input Confirm password")
    public void iCheckInputConfirmPassword() {
        iRegPage.getInputConfirmPassword();
    }

    @Then("I check button Sign Up")
    public void iCheckButtonSignUp() {
        iRegPage.getButtonSubmit();
    }

    @Then("I check link Sign In")
    public void iCheckLinkSignIn() {

        iRegPage.getLinkSignIn();

    }

    @Then("I check link Guest")
    public void iCheckLinkGuest() {
        iRegPage.getLinkGuest();
    }


//    @Then("I enter valid data (.*) in input Login")
//    public void iEnterValidDataLoginInInputLogin(String login) {
//        iRegPage.getInputLogin().sendKeys(login);
//    }
}
