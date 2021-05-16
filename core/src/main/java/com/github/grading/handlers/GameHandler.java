package com.github.grading.handlers;

import com.github.grading.controller.IGameController;

import javax.servlet.annotation.WebServlet;

@WebServlet("/game")
public class GameHandler extends AbstractServlet {

    private final IGameController controller;

    public GameHandler(IGameController controller) {
        this.controller = controller;
    }
}
