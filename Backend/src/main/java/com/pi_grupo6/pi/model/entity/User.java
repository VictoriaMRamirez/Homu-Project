package com.pi_grupo6.pi.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter @Entity
@Table(name = "users")
public class User {

    @Id
    @SequenceGenerator(name = "users_sequence", sequenceName = "users_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "users_sequence")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "surname")
    private String surname;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "city")
    private String city;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private Set<Booking> bookings = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "roles_id", referencedColumnName = "id", nullable = false)
    private Role roles;

    public String getUsername() { return email; }

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private Set<Favourite> favourites = new HashSet<>();
}
