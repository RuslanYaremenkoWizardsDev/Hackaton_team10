package com.github.grading.controller;

import com.github.grading.entity.Tournament;

import java.util.List;

public interface ITournamentController {

    List<Tournament> getAll();

    Tournament get(long id);
}
