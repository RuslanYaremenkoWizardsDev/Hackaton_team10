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
      this.place = place;
      this.startDate = new Date(startDate).toUTCString();
      this.lastRegistrationDate = new Date(lastRegistrationDate).toUTCString();
      this.levelOfTournament = levelOfTournament;
      this.numberOfParticipants = Number(numberOfParticipants);
      this.scenarioForTournament = scenarioForTournament;
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

  return tournament;
};
