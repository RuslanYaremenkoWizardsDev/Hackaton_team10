import "../css/registration.scss";

import {
  validateLogin,
  validatePassword,
  compare,
} from "./helpers/validation.js";
import { postRequest, URL } from "./helpers/request.js";
import { setCookie } from "./helpers/cookieHelper.js";
import { redirect } from "./helpers/redirect.js";

export const init = () => {
  //login nodes
  const regForm = document.querySelector("form");
  const login = regForm.login;
  const password = regForm.password;
  const confirm = regForm.confirm;
  const guestLink = document.querySelector("#guest");
  const signButton = document.querySelector("#submit-reg");

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
    postRequest(authURL, options).then((data) => {
      setLocalStorage("role", data.role);
      redirect("main.html");
    }).catch((e)=>{
      // render Error
      console.log('fronter', e);
    })
  });

  signButton.addEventListener("click", (event) => {
    event.preventDefault();
    const valid =
      validateLogin(login.value) &&
      validatePassword(password.value) &&
      compare(password.value, confirm.value);
    console.log(valid);
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

      const authURL = URL + "auth";
      postRequest(authURL, options).then((data) => {
        if (data.token) {
          setCookie("token", data.token);
          redirect("main.html");
          setLocalStorage("role", data.role);
        } else {
          //renderError()
        }
      });
    }
  });
};

init();
