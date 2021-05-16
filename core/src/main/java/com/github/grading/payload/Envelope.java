package com.github.grading.payload;

import com.github.grading.utils.TokenProvider;

import java.util.Objects;

public class Envelope {

    private Topic topic;

    private String token;


    public Envelope(Topic topic, Token token) {
        this.topic = topic;
        this.token = TokenProvider.encode(token);

    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Topic getTopic() {
        return topic;
    }

    public String getToken() {
        return token;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Envelope envelope = (Envelope) o;
        return topic == envelope.topic && Objects.equals(token, envelope.token);
    }

    @Override
    public int hashCode() {
        return Objects.hash(topic, token);
    }
}
