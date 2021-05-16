package com.github.grading.controller;

import com.github.grading.entity.Game;

import java.util.List;

public interface IGameController {

    List<Game> getAll();

    Game get(long id);
}
