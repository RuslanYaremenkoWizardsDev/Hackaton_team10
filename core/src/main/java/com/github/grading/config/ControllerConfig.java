package com.github.grading.config;

import com.github.grading.controller.*;
import com.github.grading.controller.impl.*;

public class ControllerConfig {

    private static final IAdminGameController adminGameController = new AdminGameController();
    private static final IAdminTournamentController adminTournamentController = new AdminTournamentController();
    private static final IGameController gameController = new GameController();
    private static final ITournamentController tournamentController = new TournamentController();
    private static final IUserController userController = new UserController(RepositoryConfig.getUserRepository());

    public static IAdminGameController getAdminGameController() {
        return adminGameController;
    }

    public static IAdminTournamentController getAdminTournamentController() {
        return adminTournamentController;
    }

    public static IGameController getGameController() {
        return gameController;
    }

    public static ITournamentController getTournamentController() {
        return tournamentController;
    }

    public static IUserController getUserController() {
        return userController;
    }
}
