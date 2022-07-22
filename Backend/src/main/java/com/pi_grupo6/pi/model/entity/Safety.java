package com.pi_grupo6.pi.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter @Setter @Entity
@Table(name = "safeties")
public class Safety {

    @Id
    @SequenceGenerator(name = "safeties_sequence", sequenceName = "safeties_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "safeties_sequence")
    private Long id;

    @Column(name = "description")
    private String description;

    @ManyToMany(mappedBy = "safeties")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();
}