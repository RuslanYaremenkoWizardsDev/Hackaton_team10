package com.github.grading.payload;

import com.github.grading.utils.TokenProvider;

public class ResponseEnvelope {

    public String token;

    public String role = "default";

    public ResponseEnvelope(String token) {
        this.token = token;
    }

    public ResponseEnvelope(String token, String role) {
        this.token = token;
        this.role = role;
    }

    public ResponseEnvelope(String role, Token token) {
        this.role = role;
        this.token = TokenProvider.encode(token);
    }
}
