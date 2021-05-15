import "../css/registration.scss";

import {
  validateLogin,
  validatePassword,
  compare,
} from "./helpers/validation.js";
import { postRequest, URL } from "./helpers/request.js";
import { redirect } from "./helpers/redirect.js";
import { renderError } from "./helpers/render.js";

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
        return renderError(errorText, "Server drop");
      });
  });

  signButton.addEventListener("click", (event) => {
    event.preventDefault();
    const valid =
      validateLogin(login.value) &&
      validatePassword(password.value) &&
      compare(password.value, confirm.value, errorText);
    if (valid) {
      const bodyObject = {
        login: login.value,
        password: password.value,
        type: "registration",
      };
      const options = {
        method: "POST",
        body: JSON.stringify(bodyObject),
      };

      const authURL = URL + "reg";
      postRequest(authURL, options)
        .then((data) => {
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
          return renderError(errorText, "Server drop");
        });
    } else {
      const loginValid = validateLogin(login.value);
      const passValid = validatePassword(password.value);
      if (!loginValid) {
        return renderError(
          errorText,
          "login length must be more then 3 symbols and less 25 symbols. Only latin characters and numberic in it"
        );
      }
      if (!passValid) {
        return renderError(
          errorText,
          "password length must be more then 6 symbols and less 25 symbols. Only latin characters and numberic in it"
        );
      }
    }
  });
};

regInit();
