package com.github.grading.service;

import com.github.grading.dto.CreateTournamentDto;
import com.github.grading.dto.UpdateTournamentDto;
import com.github.grading.entity.Tournament;
import com.github.grading.repository.ITournamentInviteRepository;

import java.util.List;

public interface ITournamentService extends ITournamentInviteRepository {

    List<Tournament> getAll();

    Tournament get(long id);

    void save(CreateTournamentDto tournament);

    void update(long id, UpdateTournamentDto tournament);

    void delete(long id);
}
