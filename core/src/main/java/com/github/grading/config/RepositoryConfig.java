package com.github.grading.config;

import com.github.grading.repository.IGameRepository;
import com.github.grading.repository.IPlayerRepository;
import com.github.grading.repository.ITournamentRepository;
import com.github.grading.repository.IUserRepository;
import com.github.grading.repository.impl.GameRepository;
import com.github.grading.repository.impl.PlayerRepository;
import com.github.grading.repository.impl.TournamentRepository;
import com.github.grading.repository.impl.UserRepository;
import lombok.Getter;

@Getter
public class RepositoryConfig {

    private static final IUserRepository userRepository = new UserRepository();
    private static final IPlayerRepository playerRepository = new PlayerRepository();
    private static final ITournamentRepository tournamentRepository = new TournamentRepository();
    private static final IGameRepository gameRepository = new GameRepository();

    public static IUserRepository getUserRepository() {
        return userRepository;
    }

    public static IPlayerRepository getPlayerRepository() {
        return playerRepository;
    }

    public static ITournamentRepository getTournamentRepository() {
        return tournamentRepository;
    }

    public static IGameRepository getGameRepository() {
        return gameRepository;
    }
}
