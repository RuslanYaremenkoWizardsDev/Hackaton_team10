import "../css/registration.scss";
import { validateLogin, validatePassword } from "./helpers/validation.js";
import { postRequest, URL } from "./helpers/request.js";
import { getCookie, killCookie, setCookie } from "./helpers/cookieHelper.js";
import { redirect } from "./helpers/redirect.js";
import { renderError, renderText } from "./helpers/render.js";

export const IndexInit = () => {
  //login nodes
  const regForm = document.querySelector("form");
  const login = regForm.login;
  const password = regForm.password;
  const signButton = document.querySelector("#submit-auth");
  const guestLink = document.querySelector("#guest");
  const errorText = document.querySelector(".error-text");

  guestLink.addEventListener("click", (e) => {
    e.preventDefault();
    const bodyObject = {
      type: "guest",
    };
    const options = {
      method: "POST",
      body: JSON.stringify(bodyObject),
    };
    const authURL = URL + "auth";
    postRequest(authURL, options)
      .then((data) => {
        setLocalStorage("role", data.role);
        redirect("main.html");
      })
      .catch((e) => {
        renderText(errorText, '');
        return renderError(
          errorText,
          "Server is not responding"
        );
      });
  });
  signButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderText(errorText, '');
    const valid =
      validateLogin(login.value) && validatePassword(password.value);
    if (valid) {

      const bodyObject = {
        login: login.value,
        password: password.value,
        type: "authorization",
      };
      const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyObject),
      };
      const authURL = URL + "auth";
      postRequest(authURL, options)
        .then((data) => {
          renderText(errorText, '');
          if (data.token) {
            setCookie("token", data.token);
            redirect("main.html");
            setLocalStorage("role", data.role);
          } else {
            if (data.status === 401) {
              return renderError(
                errorText,
                "We not have this user. Please go to registartion."
              );
            }
          }
        })
        .catch((e) => {
          renderText(errorText, '');
          return renderError(errorText, "Server is not responding");
        });
    } else {
      const passwordValid = validatePassword(password.value);
      const loginValid = validateLogin(login.value);
      if (!loginValid) return renderError(errorText,"login length must be more then 3 symbols and less 25 symbols. Only latin characters and numberic in it");
      if (!passwordValid) return renderError(errorText,"Password length must be more then 6 symbols and less 25 symbols. Only latin characters and numberic in it");
    }
  });
};

IndexInit();
