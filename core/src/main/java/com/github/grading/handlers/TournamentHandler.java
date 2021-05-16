package com.github.grading.handlers;

import com.github.grading.controller.ITournamentController;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/tournament")
public class TournamentHandler extends AbstractServlet {

    private final ITournamentController controller;

    public TournamentHandler(ITournamentController controller) {
        this.controller = controller;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        sendResponse(resp, controller.getAll());
    }
}
