import "../css/registration.scss";

import {
  validateLogin,
  validatePassword,
  compare,
} from "./helpers/validation.js";
import { postRequest, URL } from "./helpers/request.js";
import { redirect } from "./helpers/redirect.js";
import { renderError, renderText } from "./helpers/render.js";
import { setLocalStorage } from "./helpers/localStorageOperations.js";

export const regInit = () => {
  //login nodes
  const regForm = document.querySelector("form");
  const login = regForm.login;
  const password = regForm.password;
  const confirm = regForm.confirm;
  const guestLink = document.querySelector("#guest");
  const signButton = document.querySelector("#submit-reg");
  const errorText = document.querySelector(".error-text");

  guestLink.addEventListener("click", (e) => {
    setLocalStorage("role", "guest");
    redirect("main.html");
  });

  signButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderText(errorText, "");
    const valid = validateLogin(login.value) &&  validatePassword(password.value) && compare(password.value, confirm.value, errorText);
      console.log('valid' ,valid);
    if (valid) {
      const bodyObject = {
        login: login.value,
        password: password.value,
        confirmPassword: confirm.value,
      };
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyObject),
      };

      const authURL = URL + "registration";
      renderText(errorText, "");
      postRequest(authURL, options)
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            redirect("index.html");
          } else {
            if (data.status === 401) {
              return renderError(
                errorText,
                "We have this user. please use Another login"
              );
            }
          }
        })
        .catch((e) => {
          renderText(errorText, "");
          return renderError(errorText, "Server is not responding");
        });
    } else {
      const loginValid = validateLogin(login.value);
      const passValid = validatePassword(password.value);
      if (!loginValid) {
        renderText(errorText, "");
        return renderError(
          errorText,
          "login length must be more then 3 symbols and less 25 symbols. Only latin characters and numeric in it"
        );
      }
      if (!passValid) {
        renderText(errorText, "");
        return renderError(
          errorText,
          "password length must be more then 6 symbols and less 25 symbols. Only latin characters and numberic in it"
        );
      }
    }
  });
};

regInit();
