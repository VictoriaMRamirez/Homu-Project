package com.pi_grupo6.pi.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity @Getter @Setter
@Table(name="cities")
public class City {

    @Id
    @SequenceGenerator(name = "cities_sequence", sequenceName = "cities_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "cities_sequence")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "country")
    private String country;

    @JsonIgnore
    @OneToMany(mappedBy = "cities")
    private Set<Product> products = new HashSet<>();
}
