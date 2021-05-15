package com.githib.grading.config;

import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;
import org.apache.tomcat.websocket.server.WsContextListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import java.io.File;
import java.util.List;

public class ServerConfig {

    private static final Logger logger = LoggerFactory.getLogger(ServerConfig.class);

//    public static ServerRunner tomcat() throws ServletException {
//        Tomcat tomcat = new Tomcat();
//        String webPort = System.getenv("PORT");
//        if (webPort == null || webPort.isEmpty()) {
//            webPort = "8080"; //TODO - make 5432
//        }
//        tomcat.setPort(Integer.parseInt(webPort));
//        Context ctx = tomcat.addWebapp("/login", new File(".").getAbsolutePath());
//        ctx.addApplicationListener(WsContextListener.class.getName());
//        tomcat.addServlet(ctx, "UsersHandlers", HandlerConfig.usersHandlers());
//        ctx.addServletMappingDecoded("/*", "UsersHandlers");
//        return new ServerRunner(tomcat, ctx, List.of(chatWebsocketHandler));
//    }
    public static void tomcatRun() {
        Tomcat tomcat = new Tomcat();
        try {
            tomcat.setPort(8080);
            String str = new File(".").getAbsolutePath();
            tomcat.addWebapp("",str);
            tomcat.start();
            tomcat.getServer().await();
        } catch (LifecycleException | ServletException e) {
            logger.warn("Enter {}", e.getMessage());
        }
    }
}
