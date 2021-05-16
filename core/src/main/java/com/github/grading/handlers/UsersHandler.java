package com.github.grading.handlers;

import com.github.grading.controller.IUserController;
import com.github.grading.dto.UserAuthorizationDto;
import com.github.grading.dto.UserRegistrationDto;
import com.github.grading.exceptions.BadRequest;
import com.github.grading.exceptions.NotFound;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/user")
public class UsersHandler extends AbstractServlet {

    private final IUserController userControllers;

    public UsersHandler(IUserController userControllers) {
        this.userControllers = userControllers;
    }

    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("DO POST");

        String url = req.getRequestURI();

        if (url.endsWith("/auth")) {
            UserAuthorizationDto payload = parseRequestBody(req, UserAuthorizationDto.class);
            String result = this.userControllers.authorize(payload).orElseThrow(BadRequest::new);
            sendResponse(resp, result);
        } else if (url.endsWith("/registration")) {
            UserRegistrationDto payload = parseRequestBody(req, UserRegistrationDto.class);
            this.userControllers.register(payload);
        } else {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }
}
