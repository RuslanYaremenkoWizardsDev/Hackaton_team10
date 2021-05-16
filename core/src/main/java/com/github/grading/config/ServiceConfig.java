package com.github.grading.config;

import com.github.grading.service.ITournamentService;
import com.github.grading.service.impl.TournamentService;

public class ServiceConfig {

    private static final ITournamentService tournamentService = new TournamentService(RepositoryConfig.getTournamentRepository());

    public static ITournamentService getTournamentService() {
        return tournamentService;
    }
}
