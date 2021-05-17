export const createTournament = (e) => {
  const listItemTemplate = () => {};
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

  let error = document.getElementById("form-error");

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
  class Tournament {
    constructor(
      name,
      description,
      mode,
      place,
      startDate,
      lastRegistrationDate,
      levelOfTournament,
      numberOfParticipants,
      scenarioForTournament,
      invitedPlayers
    ) {
      this.name = name;
      this.description = description;
      this.mode = mode;
      this.place = place;
      this.startDate = startDate;
      this.lastRegistrationDate = lastRegistrationDate;
      this.levelOfTournament = levelOfTournament;
      this.numberOfParticipants = numberOfParticipants;
      this.scenarioForTournament = scenarioForTournament;
      this.invitedPlayers = invitedPlayers;
    }
  }

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
  // console.log("tournament", tournament);

  return tournament;

  if (!/^[a-z0-9_-]{1,255}$/.test(descValue)) {
    error.textContent = "Your message must be 255 characters or less!";
    return;
  }

  // { "id": 1, "name": "Name 1", "description": "description 1", "mode": "CUP", "place": "place 1", "startDate": 1621185070000, "lastRegistrationDate": 1621185070000, "levelOfTournament": "BEGINNER", "numberOfParticipants": null, "scenarioForTournament": "ONE_MATCH_CONFRONTATION", "invitedPlayers": [], "games": [] }

  // let listItem = listItemTemplate(question);
  // listContainer.insertAdjacentElement("afterbegin", listItem);
  // btnCreate.classList.remove("form__button--disabled");
  // error.style.display = "none";
  // btnCreate.disabled = false;
  form.reset();
};

const create = document.querySelector(".form__button--create");
create.addEventListener("click", createTournament);

//   getRequest[newTournament.id] = newTournament;
//   return Object.assign(newTournament);
// }
