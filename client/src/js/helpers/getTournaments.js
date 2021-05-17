export const renderAllTournaments = (data) => {
  if (!data) {
    return "Pass the list of tournaments!";
  }

  let tournamentsContainer = document.getElementById("tournamentsContainer");

  data.forEach((item) => {
    let content = document.createElement("div");
    content.classList.add("table__content-item");

    let fieldId = document.createElement("p");
    fieldId.classList.add("table__content-item", "table__item");
    fieldId.textContent = item._id;

    let fieldName = document.createElement("p");
    fieldName.classList.add("table__content-item", "table__item");
    fieldName.textContent = item.name;

    let fieldDescription = document.createElement("p");
    fieldDescription.classList.add("table__content-item", "table__item");
    fieldDescription.textContent = item.description;

    let fieldMode = document.createElement("p");
    fieldMode.classList.add("table__content-item", "table__item");
    fieldMode.textContent = item.mode;

    let fieldPlace = document.createElement("p");
    fieldPlace.classList.add("table__content-item", "table__item");
    fieldPlace.textContent = item.place;

    let fieldStartDate = document.createElement("p");
    fieldStartDate.classList.add("table__content-item", "table__item");
    fieldStartDate.textContent = item.startDate;

    let fieldLastDate = document.createElement("p");
    fieldLastDate.classList.add("table__content-item", "table__item");
    fieldLastDate.textContent = item.lastRegistrationDate;

    let fieldState = document.createElement("p");
    fieldState.classList.add("table__content-item", "table__item");
    fieldState.textContent = item.state;

    let fieldLevel = document.createElement("p");
    fieldLevel.classList.add("table__content-item", "table__item");
    fieldLevel.textContent = item.levelOfTournament;

    let fieldParticipants = document.createElement("p");
    fieldParticipants.classList.add("table__content-item", "table__item");
    fieldParticipants.textContent = item.numberOfParticipants;

    let fieldScenario = document.createElement("p");
    fieldScenario.classList.add("table__content-item", "table__item");
    fieldScenario.textContent = item.scenarioForTournament;

    let fieldActions = document.createElement("div");
    fieldActions.classList.add("table__content-item", "table__item");
    fieldActions.textContent = item.invitedPlayers;

    content.append(fieldId);
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
