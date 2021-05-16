package com.github.grading.controller;

import com.github.grading.dto.CreateGameDto;
import com.github.grading.dto.UpdateGameDto;
import com.github.grading.entity.Game;

import java.util.List;

public interface IAdminGameController {

    List<Game> getAll();

    Game get(long id);

    long create(CreateGameDto tournament);

    void update(long id, UpdateGameDto tournament);

    void delete(long id);
}
