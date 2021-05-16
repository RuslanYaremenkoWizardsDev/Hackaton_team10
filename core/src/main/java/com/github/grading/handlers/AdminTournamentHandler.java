package com.github.grading.handlers;

import com.github.grading.controller.IAdminTournamentController;

import javax.servlet.annotation.WebServlet;

@WebServlet("/admin/tournament")
public class AdminTournamentHandler {

    private final IAdminTournamentController controller;

    public AdminTournamentHandler(IAdminTournamentController controller) {
        this.controller = controller;
    }
}
