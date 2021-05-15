import "../css/registration.scss";
import { validateLogin, validatePassword } from "./helpers/validation.js";
import { postRequest, URL } from "./helpers/request.js";
import { getCookie, killCookie, setCookie } from "./helpers/cookieHelper.js";
import { redirect } from "./helpers/redirect.js";

export const init = () => {
  //login nodes
  const regForm = document.querySelector("form");
  const login = regForm.login;
  const password = regForm.password;

  const signButton = document.querySelector("#submit-auth");
  const signIn = document.querySelector(".box-auth__link");

  signButton.addEventListener("click", (event) => {
    event.preventDefault();
    const valid =
      validateLogin(login.value) && validatePassword(password.value);
    if (valid) {
      const bodyObject = {
        login: login.value,
        password: password.value,
        type: "authorization",
      };
      const options = {
        body: JSON.stringify(bodyObject),
      };

      const authURL = URL + "auth";
      postRequest(authURL, options).then((data) => {
        if (data.token) {
          setCookie("token", data.token);
          redirect("main.html");
          setLocalStorage('role', data.role);
        }
        else {
            // отрисоываем ошибку
        }
      });
    }
  });
};

init();
