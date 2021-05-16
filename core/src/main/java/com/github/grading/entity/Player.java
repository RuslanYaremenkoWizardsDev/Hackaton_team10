package com.github.grading.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
// TODO: use this @Table... when use heroku database
//@Table(name = "player", schema = "public", catalog = "d3dhbnnbhpdelm")
@Table(name = "player", schema = "public")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "games")
    private int games;

    @Column(name = "goals")
    private int goals;

    @Column(name = "points")
    private int points;
}
