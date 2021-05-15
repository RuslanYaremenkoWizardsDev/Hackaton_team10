package com.githib.grading.handlers;

import com.githib.grading.controller.IUserController;
import com.githib.grading.controller.UserController;
import com.githib.grading.dto.UserAuthorizationDto;
import com.githib.grading.dto.UserRegistrationDto;
import com.githib.grading.exceptions.BadRequest;
import com.githib.grading.exceptions.NotFound;
import com.githib.grading.utils.JsonHelper;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;
import java.util.stream.Collectors;

@WebServlet("/login")
public class UsersHandlers extends HttpServlet {

    private final IUserController userControllers;

    public UsersHandlers(IUserController userControllers) {
        this.userControllers = userControllers;
    }

    @Override
    public void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("SERVICE");
        try {
            super.service(req, resp);
            System.out.println(req.getRequestURI());
        } catch (BadRequest e) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid body.");
        } catch (NotFound e) {
            resp.sendError(HttpServletResponse.SC_NOT_FOUND, "Not found.");
        }
    }

    @Override
    public void doOptions(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("DO OPTIONS");
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
        resp.setStatus(204);
    }

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("DO GET");
        ServletOutputStream out = resp.getOutputStream();
        String result = Optional.of(this.userControllers.authorize(new UserAuthorizationDto())).orElseThrow(BadRequest::new);
        out.write(result.getBytes());
        out.flush();
        out.close();
    }

    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("DO POST");
        String body = req.getReader().lines().collect(Collectors.joining());
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
        System.out.println(req.getHeader("Content-Type"));
        if (!req.getHeader("Content-Type").contains("application/json")) {
            resp.sendError(HttpServletResponse.SC_UNSUPPORTED_MEDIA_TYPE, "Invalid content type");
        } else {
            String url = req.getRequestURI();
            System.out.println("Body : " + body);
            System.out.println(url);
            if (url.endsWith("/auth")) {
                System.out.println("AUTH");
                UserAuthorizationDto payload = JsonHelper.fromJson(body, UserAuthorizationDto.class)
                        .orElseThrow(BadRequest::new);
                System.out.println("AFTER JSON");
                String result = Optional.of(this.userControllers.authorize(payload)).orElseThrow(BadRequest::new);
                System.out.println("AFTER USER CONTROLLER");
                ServletOutputStream out = resp.getOutputStream();
                resp.setContentType("application/json");
                resp.setStatus(HttpServletResponse.SC_ACCEPTED);
                out.write(result.getBytes());
                out.flush();
                out.close();
                return;
            }

            if (url.endsWith("/registration")) {
                System.out.println("REG");
                UserRegistrationDto payload = JsonHelper.fromJson(body, UserRegistrationDto.class)
                        .orElseThrow(BadRequest::new);
                this.userControllers.register(payload);
                resp.setStatus(HttpServletResponse.SC_ACCEPTED);
            } else {
                System.out.println("BAD REQ");
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            }
        }
    }
}
