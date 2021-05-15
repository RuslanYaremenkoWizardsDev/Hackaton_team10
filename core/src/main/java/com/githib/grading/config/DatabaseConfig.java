package com.githib.grading.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;

public class DatabaseConfig {

    private static final String APPLICATION_PROPERTY_PATH = "core/src/main/resources/hikari.properties";

    public static DataSource getHikariDS() {
        HikariConfig config = new HikariConfig(APPLICATION_PROPERTY_PATH);
        return new HikariDataSource(config);
    }

    public static UserRepository getUsersService() {
        return new UsersService(getUsersRepository());
    }
}
