import "../css/main.scss";
import { renderAllTournaments } from "./helpers/getTournaments.js";
import { filterTournaments } from "./helpers/filterTournaments.js";
import { getRequest } from "./helpers/request.js";

const URLTOURNAMENTS =
  "https://my-json-server.typicode.com/mzubkova/db-json/invoices";

export const MainInit = () => {
  const container = document.querySelector("container");
  const selectParticipants = document.getElementById("participants");
  const selectStartDate = document.getElementById("filter-start-date");
  const selectState = document.getElementById("state");
  let data = JSON.parse(localStorage.getItem("data"));

  if (data.key === "admin") {
    container.classList.add("tabs");
  } else if (data.key === "guest" || data.key === "user") {
    container.classList.add("tabs--hidden");
  }

  getRequest(URLTOURNAMENTS).then((data) => {
    console.log(data);
    renderAllTournaments(data);
    localStorage.setItem("data", JSON.stringify(data));
  });

  selectState.addEventListener("change", (e) => {
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
    data = data.filter((el) => {
      let value = e.target.value;
      console.log("value_____", value);
      let date = new Date(value);
      let newDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
      console.log("newDate", newDate);
      el.date_created === newDate;
      console.log("el.date_created", el.date_created);
    });
    const table = document.querySelector("#tournamentsContainer");
    table.innerHTML = "";
    renderAllTournaments(data);
  });
};

MainInit();
