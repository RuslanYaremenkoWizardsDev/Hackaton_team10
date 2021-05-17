import "../css/main.scss";
import { renderAllTournaments } from "./helpers/getTournaments.js";
import { createTournament } from "./helpers/createTournament.js";
import { getRequest, postRequest, URL } from "./helpers/request.js";
import { checkRoles } from "./helpers/checkRoles.js";

export const MainInit = () => {
  const selectParticipants = document.getElementById("participants");
  const selectStartDate = document.getElementById("filter-start-date");
  const selectState = document.getElementById("state");
  const tabsInput = document.querySelectorAll(".tabs--hide");
  const nav = document.getElementById("nav");
  checkRoles(tabsInput, nav);

  getRequest(URL + "tournament").then((data) => {
    console.log(data);
    renderAllTournaments(data);
    localStorage.setItem("data", JSON.stringify(data));
  });

  postRequest(URL + "admin/tournament").then((data) => {
    console.log(data);
    createTournament(data);
    // localStorage.setItem("data", JSON.stringify(data));
  });

  selectState.addEventListener("change", (e) => {
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
      // console.log("newDate", newDate);
      el.date_created === newDate;
      // console.log("el.date_created", el.date_created);
    });
    const table = document.querySelector("#tournamentsContainer");
    table.innerHTML = "";
    renderAllTournaments(data);
  });
};

createTournament();
MainInit();
