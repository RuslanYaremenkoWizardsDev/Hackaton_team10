import Tournament from "../classes/Tournament.js";
export const cleaner = (node) => (node.value = "");
export const changer = (select) => (select.options[0].selected = true);

export const renderError = (node, value) => {
  if (!node || !value) return false;
  node.textContent = value;
};
export const renderText = (node, value) => {
  if (!node || value === undefined) return false;
  node.textContent = value;
};
export const renderAllTournaments = (data) => {
  if (!data) {
    return "Pass the list of tournaments!";
  }

  let tournamentsContainer = document.getElementById("tournamentsContainer");

  data.forEach((item) => {
    console.log(item);
    let content = document.createElement("div");
    content.classList.add("table__content-item");

    let fieldName = document.createElement("p");
    fieldName.classList.add("table__content-item", "table__item");
    fieldName.textContent = item.name;

    let fieldMode = document.createElement("p");
    fieldMode.classList.add("table__content-item", "table__item");
    fieldMode.textContent = item.mode;

    let fieldPlace = document.createElement("p");
    fieldPlace.classList.add("table__content-item", "table__item");
    fieldPlace.textContent = item.place;

    let fieldStartDate = document.createElement("p");
    fieldStartDate.classList.add("table__content-item", "table__item");
    fieldStartDate.textContent = new Date(item.startDate).toDateString();

    let fieldLastDate = document.createElement("p");
    fieldLastDate.classList.add("table__content-item", "table__item");

    fieldLastDate.textContent = new Date(item.lastRegistrationDate).toDateString();

    let fieldDescription = document.createElement("p");
    fieldDescription.classList.add("table__content-item", "table__item");
    fieldDescription.textContent = item.description;

    let fieldLevel = document.createElement("p");
    fieldLevel.classList.add("table__content-item", "table__item");
    fieldLevel.textContent = item.levelOfTournament;

    let fieldParticipants = document.createElement("p");
    fieldParticipants.classList.add("table__content-item", "table__item");
    fieldParticipants.textContent = item.numberOfParticipants;

    let fieldScenario = document.createElement("p");
    fieldScenario.classList.add("table__content-item", "table__item");
    fieldScenario.textContent = item.scenarioForTournament;

    content.append(fieldName);
    content.append(fieldMode);
    content.append(fieldDescription);
    content.append(fieldPlace);
    content.append(fieldStartDate);
    content.append(fieldLastDate);
    content.append(fieldLevel);
    content.append(fieldParticipants);
    content.append(fieldScenario);
    tournamentsContainer.append(content);
  });
};
export const createTournament = () => {
  const form = document.forms.modalForm;
  const inputName = form.elements.name;
  const inputMode = form.elements.mode;
  const inputPlace = form.elements.place;
  const inputDescription = form.elements.textarea;
  const inputStartDate = form.elements["start-date"];
  const inputLastDate = form.elements["last-date"];
  const inputLevel = form.elements.level;
  const inputParticipants = form.elements.participants;
  const inputScenario = form.elements.match;
  const selectInvite = form.elements["invite-user"];

  let nameValue = inputName.value;
  let modeValue = inputMode.value;
  let placeValue = inputPlace.value;
  let descValue = inputDescription.value;
  let startDateValue = inputStartDate.value;
  let lastDateValue = inputLastDate.value;
  let levelValue = inputLevel.value;
  let participantsValue = inputParticipants.value;
  let scenarioValue = inputScenario.value;
  let inviteValue = selectInvite.value;

  let tournament = new Tournament(
    nameValue,
    modeValue,
    placeValue,
    descValue,
    startDateValue,
    lastDateValue,
    levelValue,
    participantsValue,
    scenarioValue,
    inviteValue
  );

  return tournament;
};
