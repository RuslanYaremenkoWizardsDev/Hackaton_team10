import "../css/main.scss";
import { getRequest, postRequest, URL, putRequest } from "./helpers/request.js";
import { checkRoles, redirect, hide, show } from "./helpers/general.js";
import { compare } from "./helpers/validation.js";
import {
  renderAllTournaments,
  cleaner,
  changer,
  createTournament,
  renderError,
} from "./helpers/render.js";
import {
  setLocalStorage,
  getLocalStorage,
} from "./helpers/localStorageOperations.js";
import { killCookie } from "./helpers/cookieHelper.js";

export const MainInit = () => {
  const selectParticipants = document.getElementById("participants");
  const selectStartDate = document.getElementById("filter-start-date");
  const selectLastDate = document.querySelector("#filter-reg-date");
  const selectState = document.getElementById("state");
  const tabsInput = document.querySelectorAll(".tabs--hide");
  const nav = document.getElementById("nav");
  const clearAll = document.getElementById("clear-btn");
  const create = document.querySelector(".form__button--create");
  const table = document.querySelector("#tournamentsContainer");
  const logout = document.querySelector(".header__nav-btn--logout");
  const settings = document.querySelector(".header__nav-img");
  const settingsModal = document.querySelector(".settings__modal");
  const exitModal = document.querySelector("#exit");
  const changeLogin = document.querySelector("#changeLogin");
  const changePassword = document.querySelector("#changePassword");

  checkRoles(tabsInput, nav);
  checkRoles(tabsInput, nav);
  getRequest(URL + "tournament").then((data) => {
    renderAllTournaments(data);
    setLocalStorage("data", data);
  });

  selectState.addEventListener("change", (e) => {
    let data = getLocalStorage("data");
    if (e.target.value === "all") {
      return renderAllTournaments(data);
    }
    data = data.filter((el) => el.status === e.target.value);
    table.innerHTML = "";
    renderAllTournaments(data);
  });

  selectParticipants.addEventListener("change", (e) => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (e.target.value === "all") {
      renderAllTournaments(data);
      return false;
    }
    data = data.filter((el) => el.number === Number(e.target.value));
    const table = document.querySelector("#tournamentsContainer");
    table.innerHTML = "";
    renderAllTournaments(data);
  });
  selectStartDate.addEventListener("change", (e) => {
    let data = JSON.parse(localStorage.getItem("data"));
    data = data.filter((el) => {
      let value = e.target.value;
      console.log("value_____", value);
      let date = new Date(value);
      let newDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
      el.date_created === newDate;
    });
  });
  clearAll.addEventListener("click", (e) => {
    cleaner(selectStartDate);
    cleaner(selectLastDate);
    changer(selectState);
    changer(selectParticipants);
  });
  create.addEventListener("click", (e) => {
    e.preventDefault();
    const newTournament = createTournament();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTournament),
    };
    console.log(options.body);
    postRequest(URL + "admin/tournament", options).then((data) => {
      if (data === "done")
        getRequest(URL + "tournament").then((data) => {
          renderAllTournaments(data);
          setLocalStorage("data", data);
        });
    });
  });
  logout.addEventListener("click", (e) => {
    killCookie("token");
    setLocalStorage("data", "");
    setLocalStorage("role", "");
    redirect("index.html");
  });
  settings.addEventListener("click", (e) => show(settingsModal));
  settingsModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("settings__modal")) hide(settingsModal);
  });
  exitModal.addEventListener("click", (e) => hide(settingsModal));
  changeLogin.addEventListener("click", (e) => {
    const ModalOldLogin = document.querySelector("#oldLogin");
    const ModalNewLogin = document.querySelector("#newLogin");
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      cors: "no-cors",
      body: JSON.stringify({
        oldLogin: ModalOldLogin.value,
        newLogin: ModalNewLogin.value,
      }),
    };
    putRequest(URL + "user", options).then((data) => hide(settingsModal));
  });
  changePassword.addEventListener("click", (e) => {
    const ModalOldPassword = document.querySelector("#oldPassword");
    const ModalNewPassword = document.querySelector("#newPassword");
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      cors: "no-cors",
      body: JSON.stringify({
        oldLogin: ModalOldPassword.value,
        newLogin: ModalNewPassword.value,
      }),
    };
    putRequest(URL + "user", options).then((data) => hide(settingsModal));
  });
};
MainInit();
