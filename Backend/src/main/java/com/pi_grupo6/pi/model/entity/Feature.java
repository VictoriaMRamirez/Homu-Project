package com.pi_grupo6.pi.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity @Getter @Setter
@Table(name="features")
public class Feature {

    @Id
    @SequenceGenerator(name = "features_sequence", sequenceName = "features_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "features_sequence")
    private Long id;

    @Column(name = "icon")
    private String icon;

    @Column(name = "description")
    private String description;

    @ManyToMany(mappedBy = "features")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();
}
