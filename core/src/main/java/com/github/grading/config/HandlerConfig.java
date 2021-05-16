package com.github.grading.config;

import com.github.grading.handlers.*;

public class HandlerConfig {

    private static final AdminGameHandler adminGameHandler = new AdminGameHandler(ControllerConfig.getAdminGameController());
    private static final AdminTournamentHandler adminTournamentHandler = new AdminTournamentHandler(ControllerConfig.getAdminTournamentController());
    private static final GameHandler gameHandler = new GameHandler(ControllerConfig.getGameController());
    private static final TournamentHandler tournamentHandler = new TournamentHandler(ControllerConfig.getTournamentController());
    private static final UsersHandler usersHandler = new UsersHandler(ControllerConfig.getUserController());

    public static AdminGameHandler getAdminGameHandler() {
        return adminGameHandler;
    }

    public static AdminTournamentHandler getAdminTournamentHandler() {
        return adminTournamentHandler;
    }

    public static GameHandler getGameHandler() {
        return gameHandler;
    }

    public static TournamentHandler getTournamentHandler() {
        return tournamentHandler;
    }

    public static UsersHandler getUsersHandler() {
        return usersHandler;
    }
}
