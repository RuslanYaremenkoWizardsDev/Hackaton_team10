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
    fieldName.textContent = item.id;

    let fieldMode = document.createElement("p");
    fieldMode.classList.add("table__content-item", "table__item");
    fieldMode.textContent = item.name;

    let fieldPlace = document.createElement("p");
    fieldPlace.classList.add("table__content-item", "table__item");
    fieldPlace.textContent = item.mode;

    let fieldStartDate = document.createElement("p");
    fieldStartDate.classList.add("table__content-item", "table__item");
    fieldStartDate.textContent = item.place;

    let fieldLastDate = document.createElement("p");
    fieldLastDate.classList.add("table__content-item", "table__item");
    fieldLastDate.textContent = item.startDate;

    let fieldState = document.createElement("p");
    fieldState.classList.add("table__content-item", "table__item");
    fieldState.textContent = item.lastRegistrationDate;

    let fieldLevel = document.createElement("p");
    fieldLevel.classList.add("table__content-item", "table__item");
    fieldLevel.textContent = item.numberOfParticipants;

    let fieldParticipants = document.createElement("p");
    fieldParticipants.classList.add("table__content-item", "table__item");
    fieldParticipants.textContent = item.scenarioForTournament;

    let fieldScenario = document.createElement("p");
    fieldScenario.classList.add("table__content-item", "table__item");
    fieldScenario.textContent = item.numberOfParticipants;

    let fieldActions = document.createElement("div");
    fieldActions.classList.add("table__content-item", "table__item");
    fieldActions.textContent = item.levelOfTournament;

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
    tournamentsContainer.append(content);
  });
};
