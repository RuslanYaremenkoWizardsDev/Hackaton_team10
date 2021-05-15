package com.githib.grading;

import com.githib.grading.config.ServerConfig;

import javax.servlet.ServletException;

public class ApplicationStart {
    public static void main(String[] args) {
        try {
            ServerConfig.tomcat().run();
        } catch (ServletException e) {
            e.printStackTrace();
        }
    }
}
