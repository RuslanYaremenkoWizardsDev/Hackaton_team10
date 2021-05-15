package com.githib.grading.repository.user;

import com.githib.grading.entity.User;

import java.util.List;

public interface IUserRepository {

    List<User> findAll();

    User findByLogin(String login);

    User findById(int id);

    User save(User user);

    void update(User user);

    void delete(User user);
}
