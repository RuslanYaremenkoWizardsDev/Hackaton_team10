package com.github.grading.utils;

import com.github.grading.dto.UserRegistrationDto;
import com.github.grading.entity.User;

public class TransferObj {

    public static User toUser(UserRegistrationDto data) {
        return new User(
                data.getLogin(),
                data.getPassword()
        );
    }
}
