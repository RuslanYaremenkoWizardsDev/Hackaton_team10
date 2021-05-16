package com.github.grading.handlers;

import com.github.grading.controller.ITournamentController;

import javax.servlet.annotation.WebServlet;

@WebServlet("/tournament")
public class TournamentHandler {

    private final ITournamentController controller;

    public TournamentHandler(ITournamentController controller) {
        this.controller = controller;
    }
}
