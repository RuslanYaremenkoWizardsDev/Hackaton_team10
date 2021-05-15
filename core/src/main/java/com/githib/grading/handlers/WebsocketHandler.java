package com.githib.grading.handlers;

import com.githib.grading.network.WebsocketConnectionPool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.websocket.OnMessage;
import javax.websocket.Session;

public class WebsocketHandler {
//
//    private final Logger logger = LoggerFactory.getLogger(WebsocketHandler.class);
//
//    private final WebsocketConnectionPool websocketConnectionPool;
//
//    private final Broker broker;
//
//    public WebsocketHandler(WebsocketConnectionPool websocketConnectionPool, Broker broker) {
//        this.websocketConnectionPool = websocketConnectionPool;
//        this.broker = broker;
//    }
//
//    @OnMessage
//    public void messages(Session session, String payload) {
//        try {
//            Envelope env = JsonHelper.fromFormat(payload, Envelope.class).orElseThrow();
//            switch (env.getTopic()) {
//                case auth:
//                    Token result = TokenProvider.decode(env.getToken());
//                    Long id = result.getUserId();
//                    this.websocketConnectionPool.addSession(id, session);
//                    break;
//                case messages:
//                    this.broker.broadcast(this.websocketConnectionPool.getSessions(), env.getMessage());
//                    break;
//                case disconnect:
//                    //TODO
//                    break;
//                default:
//            }
//        } catch (Throwable e) {
//            //TODO single sent about user
//            logger.warn("Enter {}", e.getMessage());
//        }
//    }
}
