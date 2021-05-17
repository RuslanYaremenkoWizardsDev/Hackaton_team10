import "../css/registration.scss";
import { postRequest, URL } from "./helpers/request.js";
import {setCookie } from "./helpers/cookieHelper.js";
import { redirect } from "./helpers/general";
import { renderError, renderText } from "./helpers/render.js";
import { setLocalStorage } from "./helpers/localStorageOperations.js";

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
    setLocalStorage("role", 'guest');
    redirect("main.html");
  });
  signButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderText(errorText, "");
    const bodyObject = {
      login: login.value,
      password: password.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyObject),
    };
    const authURL = URL + "user/auth";
    postRequest(authURL, options)
      .then((data) => {
        renderText(errorText, "");
        data.body = JSON.parse(data.body);
        console.log(data.status === 202);
        if (data.status === 202) {
          if(data.body.role !== 'admin'){
            data.body.role = 'user';
          }
          setCookie("token", data.body.token);
          setLocalStorage("role", data.body.role);
          redirect("main.html");
        } else return renderError(errorText, "некоректный логин или пароль");
      })
      .catch((e) => {
        renderText(errorText, "");
          return renderError(errorText, "некоректный логин или пароль");
      });
  });
};

IndexInit();
