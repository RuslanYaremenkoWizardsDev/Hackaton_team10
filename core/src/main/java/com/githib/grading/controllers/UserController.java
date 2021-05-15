package com.githib.grading.controllers;

import com.githib.grading.config.DatabaseConfig;

public class UserController {

    public static UserControllers usersController(){
        return new UserControllers(DatabaseConfig.getUsersService());
    }
}
