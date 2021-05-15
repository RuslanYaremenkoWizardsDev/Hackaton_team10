package com.githib.grading.utils;

import com.githib.grading.dto.UserAuthorizationDto;
import com.githib.grading.dto.UserRegistrationDto;
import com.githib.grading.entity.User;

public class TransferObj {

    public static User toUser(UserRegistrationDto data) {
        return new User(
                data.getLogin(),
                data.getPassword()
        );
    }
}
