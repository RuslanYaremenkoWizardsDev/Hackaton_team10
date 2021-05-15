package com.githib.grading.controller;

import com.githib.grading.dto.UserAuthorizationDto;
import com.githib.grading.dto.UserRegistrationDto;

public interface IUserController {

    String authorize(UserAuthorizationDto userAuthDto);

    void register(UserRegistrationDto userRegDto);
}
