package com.github.grading.repository.impl;

import com.github.grading.entity.User;
import com.github.grading.repository.IUserRepository;

import javax.persistence.TypedQuery;
import java.util.Optional;

import static com.github.grading.utils.HibernateSessionFactoryUtil.getSession;

public class UserRepository extends AbstractRepository<User, Long> implements IUserRepository {

    @Override
    public Optional<User> findByLogin(String login) {
        TypedQuery<User> query = getSession().createQuery("From User where login=:login", User.class);
        query.setParameter("login", login);
        return query.getResultStream().findFirst();
    }
}
