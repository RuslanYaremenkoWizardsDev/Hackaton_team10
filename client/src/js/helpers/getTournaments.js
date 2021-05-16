export const renderAllTournaments = (data) => {
  if (!data) {
    return "Pass the list of tournaments!";
  }

  let tournamentsContainer = document.getElementById("tournamentsContainer");

  data.forEach((item) => {
    let content = document.createElement("div");
    content.classList.add("table__content-item");

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
    tournamentsContainer.append(content);
  });
};
