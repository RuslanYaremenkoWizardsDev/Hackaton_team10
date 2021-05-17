import "../css/main.scss";
import { getRequest, postRequest, URL } from "./helpers/request.js";
import { renderAllTournaments } from "./helpers/getTournaments.js";
import { createTournament } from "./helpers/createTournament.js";
import { onDeleteHandler } from "./helpers/deleteTournament.js";
import { checkRoles } from "./helpers/checkRoles.js";

const json = {
  id: 1,
  name: "Name 1",
  description: "description 1",
  mode: "CUP",
  place: "place 1",
  startDate: 1621195870000,
  lastRegistrationDate: 1621195870000,
  levelOfTournament: "BEGINNER",
  numberOfParticipants: null,
  scenarioForTournament: "ONE_MATCH_CONFRONTATION",
  invitedPlayers: [],
  games: [],
};

export const MainInit = () => {
  const selectParticipants = document.getElementById("participants");
  const selectStartDate = document.getElementById("filter-start-date");
  const selectState = document.getElementById("state");
  const tabsInput = document.querySelectorAll(".tabs--hide");
  const nav = document.getElementById("nav");
  const clearAll = document.getElementById("clear-btn");
  checkRoles(tabsInput, nav);

  // getRequest(
  //   "https://my-json-server.typicode.com/mzubkova/db-json/invoices"
  // ).then((data) => {
  //   console.log(data);
  //   renderAllTournaments(data);
  //   localStorage.setItem("data", JSON.stringify(data));
  // });

  const create = document.querySelector(".form__button--create");
 
  checkRoles(tabsInput, nav);
  getRequest(URL + "tournament").then((data) => {
    console.log(data);
    renderAllTournaments(data);
    localStorage.setItem("data", JSON.stringify(data));
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
      el.date_created === newDate;
    });
    const table = document.querySelector("#tournamentsContainer");
    table.innerHTML = "";
    renderAllTournaments(data);
  });

  clearAll.addEventListener("click", (e) => {
    confirm("You want to delete invoice");
    onDeleteHandler;
    console.log(clearAll);

    if (clearAll.classList.contains("btn--remove")) {
      let data = renderAllTournaments(data);
      console.log("data", data);
      let id = data._id;
      console.log("id", id);
    }

  create.addEventListener("click", (e)=>{
    e.preventDefault();
    const newTournament  = createTournament();
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTournament),
    }
    console.log(options.body);
    postRequest(URL+'admin/tournament', options).then((data)=>{
      console.log(data);
    })
  });
};

MainInit();
