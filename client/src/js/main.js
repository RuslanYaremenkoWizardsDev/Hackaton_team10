import "../css/main.scss";
import { getRequest } from "./helpers/request.js";

const URL = "https://my-json-server.typicode.com/mzubkova/db-json/invoices";
let tournamentsContainer = document.getElementById("tournamentsContainer");
// let tournamentsField = document.querySelector(".table__content-item");

console.log(tournamentsContainer);
getRequest(URL).then((data) => {
  console.log(data);
  renderAllTournaments(data);
});

function renderAllTournaments(data) {
  if (!data) {
    console.error("Pass the list of tournaments!");
    return;
  }

  data.forEach((item) => {
    console.log("element", item);
    let content = document.createElement("div");
    content.classList.add("table__content-item");
    tournamentsContainer.append(content);

    let fieldName = document.createElement("p");
    fieldName.classList.add("table__content-item", "table__item");
    fieldName.textContent = item._id;

    let fieldMode = document.createElement("p");
    fieldMode.classList.add("table__content-item", "table__item");
    fieldMode.textContent = item.number;

    let fieldPlace = document.createElement("p");
    fieldPlace.classList.add("table__content-item", "table__item");
    fieldPlace.textContent = item.date_supplied;

    let fieldStartDate = document.createElement("p");
    fieldStartDate.classList.add("table__content-item", "table__item");
    fieldStartDate.textContent = item.date_supplied;

    let fieldLastDate = document.createElement("p");
    fieldLastDate.classList.add("table__content-item", "table__item");
    fieldLastDate.textContent = item.date_supplied;

    let fieldState = document.createElement("p");
    fieldState.classList.add("table__content-item", "table__item");
    fieldState.textContent = item.date_supplied;

    let fieldLevel = document.createElement("p");
    fieldLevel.classList.add("table__content-item", "table__item");
    fieldLevel.textContent = item.date_supplied;

    let fieldParticipants = document.createElement("p");
    fieldParticipants.classList.add("table__content-item", "table__item");
    fieldParticipants.textContent = item.date_supplied;

    let fieldScenario = document.createElement("p");
    fieldScenario.classList.add("table__content-item", "table__item");
    fieldScenario.textContent = item.date_supplied;

    let fieldActions = document.createElement("div");
    fieldActions.classList.add("table__content-item", "table__item");
    fieldActions.textContent = item.date_supplied;

    content.append(fieldName);
    content.append(fieldMode);
    content.append(fieldPlace);
    content.append(fieldStartDate);
    content.append(fieldLastDate);
    content.append(fieldState);
    content.append(fieldLevel);
    content.append(fieldParticipants);
    content.append(fieldScenario);
    content.append(fieldActions);
  });
}
