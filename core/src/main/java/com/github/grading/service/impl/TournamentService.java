package com.github.grading.service.impl;

import com.github.grading.dto.CreateTournamentDto;
import com.github.grading.dto.UpdateTournamentDto;
import com.github.grading.entity.Tournament;
import com.github.grading.entity.TournamentInvite;
import com.github.grading.entity.TournamentMode;
import com.github.grading.repository.ITournamentRepository;
import com.github.grading.service.ITournamentService;

import java.sql.Timestamp;
import java.util.List;

public class TournamentService implements ITournamentService {

    private final ITournamentRepository repository;

    public TournamentService(ITournamentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Tournament> getAll() {
        return repository.findAll();
    }

    @Override
    public Tournament get(long id) {
        return repository.findOne(id);
    }

    @Override
    public void save(CreateTournamentDto tournament) {
        Tournament entity = new Tournament();

        entity.setName(tournament.getName());
        entity.setDescription(tournament.getDescription());
        entity.setPlace(tournament.getPlace());
        entity.setLevelOfTournament(tournament.getLevelOfTournament());
//        entity.setNumberOfParticipants(tournament.getNumberOfParticipants());
        entity.setScenarioForTournament(tournament.getScenarioForTournament());
        entity.setStartDate(Timestamp.valueOf(tournament.getStartDate()));
        entity.setLastRegistrationDate(Timestamp.valueOf(tournament.getLastRegistrationDate()));
        entity.setMode(TournamentMode.CUP);

        repository.save(entity);
    }

    @Override
    public void update(long id, UpdateTournamentDto newTournament) {
        Tournament oldTournament = get(id);

        oldTournament.setName(newTournament.getName());
        oldTournament.setDescription(newTournament.getDescription());
        oldTournament.setPlace(newTournament.getPlace());
        oldTournament.setLevelOfTournament(newTournament.getLevelOfTournament());
//        oldTournament.setNumberOfParticipants(tournament.getNumberOfParticipants());
        oldTournament.setScenarioForTournament(newTournament.getScenarioForTournament());
        oldTournament.setStartDate(Timestamp.valueOf(newTournament.getStartDate()));
        oldTournament.setLastRegistrationDate(Timestamp.valueOf(newTournament.getLastRegistrationDate()));

    }

    @Override
    public void delete(long id) {
        repository.delete(id);
    }

    @Override
    public TournamentInvite save(TournamentInvite entity) {
        return null;
    }

    @Override
    public TournamentInvite getOne(Long id) {
        return null;
    }

    @Override
    public TournamentInvite findOne(Long id) {
        return null;
    }

    @Override
    public List<TournamentInvite> findAll() {
        return null;
    }

    @Override
    public void update(TournamentInvite entity) {

    }

    @Override
    public void delete(TournamentInvite entity) {

    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public boolean exists(Long id) {
        return false;
    }
}
