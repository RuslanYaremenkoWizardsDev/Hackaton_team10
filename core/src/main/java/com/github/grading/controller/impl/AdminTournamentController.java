package com.github.grading.controller.impl;

import com.github.grading.controller.IAdminTournamentController;
import com.github.grading.dto.CreateTournamentDto;
import com.github.grading.dto.UpdateTournamentDto;
import com.github.grading.entity.Tournament;

import java.util.List;

public class AdminTournamentController implements IAdminTournamentController {
    @Override
    public List<Tournament> getAll() {
        return null;
    }

    @Override
    public Tournament get(long id) {
        return null;
    }

    @Override
    public long create(CreateTournamentDto tournament) {
        return 0;
    }

    @Override
    public void update(long id, UpdateTournamentDto tournament) {

    }

    @Override
    public void delete(long id) {

    }
}
