package com.github.grading.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
//@Table(name = "user", schema = "public", catalog = "d3dhbnnbhpdelm")
@Table(name = "user", schema = "public")
@Data
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "login", unique = true)
    private String login;

    @Column(name = "password")
    private String password;

    private int age;

    private String city;

    private String hobby;

    private String role;

    @ToString.Exclude
    @OneToMany(mappedBy = "user")
    private List<Player> players;

    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }
}
