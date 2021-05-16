package com.github.grading.handlers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.github.grading.controller.IUserController;
import com.github.grading.dto.UserAuthorizationDto;
import com.github.grading.dto.UserRegistrationDto;
import com.github.grading.exceptions.BadRequest;
import com.github.grading.exceptions.NotFound;
import com.github.grading.payload.ResponseEnvelope;
import com.github.grading.payload.Token;
import com.github.grading.utils.JsonHelper;
import com.github.grading.utils.TokenProvider;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/")
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
            System.out.println("AUTH PAYLOAD");
            System.out.println(payload.toString());
            String result = this.userControllers.authorize(payload).orElseThrow(BadRequest::new);
            ObjectMapper mapper = new ObjectMapper();
            String str = mapper.writeValueAsString(new ResponseEnvelope(result, userControllers.getRole()));
            System.out.println(str + " " + "JSON TOKEN");
            sendResponse(resp, str);
        } else if (url.endsWith("/registration")) {
            UserRegistrationDto payload = parseRequestBody(req, UserRegistrationDto.class);
            System.out.println("OUT PAYLOAD");
            System.out.println(payload);
            this.userControllers.register(payload);
            System.out.println("AFTER SET PAYLOAD");
        } else {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }
}
