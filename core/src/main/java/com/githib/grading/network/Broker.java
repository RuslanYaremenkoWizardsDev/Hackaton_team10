package com.githib.grading.network;

import com.githib.grading.payload.Envelope;
import com.githib.grading.utils.JsonHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.websocket.Session;
import java.io.IOException;
import java.util.List;

public class Broker {

    private static final Logger logger = LoggerFactory.getLogger(Broker.class);

    public void broadcast(List<Session> sessions, Envelope env) {
        String json = JsonHelper.toJson(env).get();
        sessions.forEach(session -> {
            send(session, json);
        });
    }

    public void send(Session session, String str) {
        try {
            session.getBasicRemote().sendText(str);
        } catch (IOException exception) {
            logger.warn("Enter : {}", exception.getMessage());
        }
    }

}
