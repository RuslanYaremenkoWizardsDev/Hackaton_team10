package com.github.grading.entity;

public enum NumberOfParticipants {

    N4(4),
    N8(8),
    N16(8),
    N32(32),
    N64(64),
    N128(128);

    private final int number;

    NumberOfParticipants(int number) {
        this.number = number;
    }
}
