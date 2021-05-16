package com.github.grading.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
// TODO: use this @Table... when use heroku database
//@Table(name = "tournament", schema = "public", catalog = "d3dhbnnbhpdelm")
@Table(name = "tournament", schema = "public")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name", unique = true, nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "mode", nullable = false)
    @Enumerated(EnumType.ORDINAL)
    private TournamentMode mode;

    @Column(name = "place")
    private String place;

    @Column(name = "start_date")
    private Timestamp startDate;

    @Column(name = "last_registration_date")
    private Timestamp lastRegistrationDate;

    @Column(name = "level_of_tournament")
    @Enumerated(EnumType.ORDINAL)
    private LevelOfTournament levelOfTournament;

    @Column(name = "number_of_participants")
    @Enumerated(EnumType.ORDINAL)
    private NumberOfParticipants numberOfParticipants;

    @Column(name = "scenario_for_tournament")
    @Enumerated(EnumType.ORDINAL)
    private ScenarioForTournament scenarioForTournament;

    @Column(name = "invited_players")
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Player> invitedPlayers;

    @Column(name = "games")
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Game> games;
}
