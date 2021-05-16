package com.github.grading.handlers;

import com.github.grading.controller.IAdminGameController;

import javax.servlet.annotation.WebServlet;

@WebServlet("/admin/tournament/*/game")
public class AdminGameHandler extends AbstractServlet {

    private final IAdminGameController controller;

    public AdminGameHandler(IAdminGameController controller) {
        this.controller = controller;
    }
}
