package com.githib.grading.controller;

import com.githib.grading.dto.UserAuthorizationDto;
import com.githib.grading.dto.UserRegistrationDto;
import com.githib.grading.entity.User;
import com.githib.grading.payload.Token;
import com.githib.grading.repository.user.IUserRepository;
import com.githib.grading.utils.TokenProvider;

import static com.githib.grading.utils.TransferObj.toUser;

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
                System.currentTimeMillis(),
                System.currentTimeMillis() + 18000
        );
        return TokenProvider.encode(token);
    }

    @Override
    public void register(UserRegistrationDto userRegDto) {
        this.userRepository.save(toUser(userRegDto));
    }
}

