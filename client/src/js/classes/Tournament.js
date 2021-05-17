export default class Tournament {
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
    this.startDate = '2021-05-25 20:11:10.000000';
    this.lastRegistrationDate = '2021-05-30 20:11:10.000000';
    this.levelOfTournament = levelOfTournament;
    this.numberOfParticipants = Number(numberOfParticipants);
    this.scenarioForTournament = scenarioForTournament;
  }
}
