package com.github.grading.controller;

import com.github.grading.dto.UserAuthorizationDto;
import com.github.grading.dto.UserRegistrationDto;

import java.util.Optional;

public interface IUserController {

    Optional<String> authorize(UserAuthorizationDto userAuthDto);

    void register(UserRegistrationDto userRegDto);
}
