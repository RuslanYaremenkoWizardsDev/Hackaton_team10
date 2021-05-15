package com.githib.grading.controller;

import com.githib.grading.dto.UserAuthorizationDto;
import com.githib.grading.dto.UserRegistrationDto;
import com.githib.grading.entity.User;
import com.githib.grading.repository.user.IUserRepository;

public class UserController implements IUserController {

    private IUserRepository userRepository;

    public UserController(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public String authorize(UserAuthorizationDto userAuthDto) {
        User user = userRepository.findByLogin(userAuthDto.getLogin());


        Token token = new Token(
                user.getLogin(),
                DateUtils.getCurrentDate(),
                DateUtils.addMinutes(DateUtils.getCurrentDate(), 30)
        );
        return TokenProvider.encode(token);
    }

    @Override
    public void register(UserRegistrationDto userRegDto) {
        this.userRepository.save(userRegDto.toUser());
    }
}

