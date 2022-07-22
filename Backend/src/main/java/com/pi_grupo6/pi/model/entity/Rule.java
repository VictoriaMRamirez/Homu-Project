package com.pi_grupo6.pi.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter @Setter @Entity
@Table(name = "rules")
public class Rule {

    @Id
    @SequenceGenerator(name = "rules_sequence", sequenceName = "rules_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "rules_sequence")
    private Long id;

    @Column(name = "description")
    private String description;

    @ManyToMany(mappedBy = "rules")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();
}
