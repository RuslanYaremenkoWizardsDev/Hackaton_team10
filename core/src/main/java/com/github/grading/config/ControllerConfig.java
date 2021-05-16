package com.github.grading.config;

import com.github.grading.controller.IUserController;
import com.github.grading.controller.impl.UserController;

public class ControllerConfig {

    private static final IUserController userController = new UserController(RepositoryConfig.getUserRepository());

    public static IUserController getUserController() {
        return userController;
    }
}
