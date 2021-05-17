package Steps;

import Interfaces.IAuthPage;
import Interfaces.IMainPage;
import Interfaces.IRegPage;
import entities.AuthorizationPage;
import entities.MainPage;
import entities.RegistrationPage;

public class Steps {

    IAuthPage iAuthPage = new AuthorizationPage();
    IMainPage iMainPage = new MainPage();
    IRegPage iRegPage = new RegistrationPage();
}
