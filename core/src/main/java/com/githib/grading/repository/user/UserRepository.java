package com.githib.grading.repository.user;

import com.githib.grading.entity.User;
import com.githib.grading.utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

import static com.githib.grading.utils.HibernateSessionFactoryUtil.*;


public class UserRepository implements IUserRepository{

    public UserRepository() {
    }

    @Override
    public User findById(int id) {
        return getSessionFactory().openSession().get(User.class, id);
    }

    @Override
    public User findByLogin(String login) {
        return getSessionFactory().openSession().get(User.class, login);
    }

    @Override
    public User save(User user) {
        Session session = getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(user);
        tx1.commit();
        session.close();
        return user;
    }

    @Override
    public void update(User user) {
        Session session = getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(user);
        tx1.commit();
        session.close();
    }

    @Override
    public void delete(User user) {
        Session session = getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(user);
        tx1.commit();
        session.close();
    }

    public List<User> findAll() {
        return getSessionFactory().openSession().createQuery("From User", User.class).list();
    }
}
