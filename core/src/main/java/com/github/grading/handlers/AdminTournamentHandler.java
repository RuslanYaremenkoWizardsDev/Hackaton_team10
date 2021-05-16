package com.github.grading.handlers;

import com.github.grading.controller.IAdminTournamentController;

import javax.servlet.annotation.WebServlet;

@WebServlet("/admin/tournament")
public class AdminTournamentHandler extends AbstractServlet {

    private final IAdminTournamentController controller;

    public AdminTournamentHandler(IAdminTournamentController controller) {
        this.controller = controller;
    }
}
