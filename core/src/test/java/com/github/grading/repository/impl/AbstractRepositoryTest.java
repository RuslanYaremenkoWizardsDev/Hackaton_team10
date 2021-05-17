package com.github.grading.repository.impl;

import com.github.grading.entity.User;
import com.github.grading.utils.HibernateSessionFactoryUtil;
import org.hibernate.*;
import org.hibernate.proxy.HibernateProxy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;


import static org.junit.Assert.*;

public class AbstractRepositoryTest {

    private SessionFactory factory;

    private Session session;


    @Before
    public void init() {
        try {
            factory = HibernateSessionFactoryUtil.getSession().getSessionFactory();
            session = factory.openSession();
        } catch (HibernateException e) {
            fail("Failed to initiate Hibernate Session [Exception:" + e.toString() + "]");
        }
    }

    @After
    public void close() {
        if (session != null) {
            session.close();
        }
    }

    @Test(expected = ObjectNotFoundException.class)
    public void givenAnNonExistentEmployeeId_whenUseLoadMethod_thenThrowObjectNotFoundException() {
        User user = session.load(User.class, 999L);
        assertNotNull(user);
        user.getFirstName();
    }

    @Test
    public void givenAnNonExistentUserId() {
        User user = session.load(User.class, 14L);
        assertNotNull(user);
        assertTrue(user instanceof HibernateProxy);
    }

}