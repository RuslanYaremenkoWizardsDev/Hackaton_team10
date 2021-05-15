package com.githib.grading.config;

import com.githib.grading.controller.IUserController;
import com.githib.grading.controller.UserController;
import com.githib.grading.handlers.UsersHandlers;
import com.githib.grading.handlers.WebsocketHandler;
import com.githib.grading.network.Broker;
import com.githib.grading.network.WebsocketConnectionPool;
import com.githib.grading.repository.user.IUserRepository;
import com.githib.grading.repository.user.UserRepository;

public class AppConfig {

    private static Broker broker = new Broker();

    private static WebsocketConnectionPool websocketConnectionPool = new WebsocketConnectionPool();

    private static IUserRepository userRepository = new UserRepository();

    private static IUserController userController = new UserController(getUserRepository());

    private static UsersHandlers usersHandler = new UsersHandlers(getUserController());

    private static WebsocketHandler websocketHandler = new WebsocketHandler(getWebsocketConnectionPool(),getBroker());

    public static IUserController getUserController() {
        return userController;
    }

    public static UsersHandlers getUsersHandler() {
        return usersHandler;
    }

    public static WebsocketHandler getWebsocketHandler() {
        return websocketHandler;
    }

    public static WebsocketConnectionPool getWebsocketConnectionPool() {
        return websocketConnectionPool;
    }

    public static IUserRepository getUserRepository() {
        return userRepository;
    }

    public static Broker getBroker() {
        return broker;
    }
}
