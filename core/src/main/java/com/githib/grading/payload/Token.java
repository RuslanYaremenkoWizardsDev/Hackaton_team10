package com.githib.grading.payload;

import java.io.Serializable;
import java.util.Objects;

public class Token implements Serializable {

    private Long id;

    private String login;

    private long expire_in;

    private long createdAt;

    public Token() {
    }

    public Token(String login, long expire_in, long createdAt) {
        this.login = login;
        this.expire_in = expire_in;
        this.createdAt = createdAt;
    }

    public Token(Long id, String login, long expire_in, long createdAt) {
        this.id = id;
        this.login = login;
        this.expire_in = expire_in;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public long getExpire_in() {
        return expire_in;
    }

    public void setExpire_in(long expire_in) {
        this.expire_in = expire_in;
    }

    public long getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(long createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Token token = (Token) o;
        return expire_in == token.expire_in && createdAt == token.createdAt && Objects.equals(id, token.id) && Objects.equals(login, token.login);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, login, expire_in, createdAt);
    }

    @Override
    public String toString() {
        return "Token{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", expire_in=" + expire_in +
                ", createdAt=" + createdAt +
                '}';
    }
}
