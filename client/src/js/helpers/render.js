export const renderError = (node, value) => {
    if(!node || !value) return false;
    node.textContent = value;
}
export const renderText = (node, value) => {
    if(!node || value === undefined) return false;
    node.textContent = value;
}
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
      fieldMode.classList.add("table__content-item",    "table__item");
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

  /*     let fieldState = document.createElement("p");
      fieldState.classList.add("table__content-item", "table__item");
      fieldState.textContent = item.scenarioForTournament; */
  
      let fieldLevel = document.createElement("p");
      fieldLevel.classList.add("table__content-item", "table__item");
      fieldLevel.textContent = item.levelOfTournament;
  
      let fieldParticipants = document.createElement("p");
      fieldParticipants.classList.add("table__content-item", "table__item");
      fieldParticipants.textContent = item.numberOfParticipants;
  
      let fieldScenario = document.createElement("p");
      fieldScenario.classList.add("table__content-item", "table__item");
      fieldScenario.textContent = item.scenarioForTournament;
  
/*       let fieldActions = document.createElement("div");
      fieldActions.classList.add("table__content-item", "table__item");
      fieldActions.textContent = item.scenarioForTournament; */
  
      content.append(fieldName);
      content.append(fieldMode);
      content.append(fieldPlace);
      content.append(fieldStartDate);
      content.append(fieldLastDate);
/*       content.append(fieldState); */
      content.append(fieldLevel);
      content.append(fieldParticipants);
      content.append(fieldScenario);
  /*     content.append(fieldActions); */
      tournamentsContainer.append(content);
    });
  };
