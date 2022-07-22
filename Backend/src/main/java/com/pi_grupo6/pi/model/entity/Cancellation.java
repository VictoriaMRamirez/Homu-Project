package com.pi_grupo6.pi.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter @Setter @Entity
@Table(name = "cancellations")
public class Cancellation {

    @Id
    @SequenceGenerator(name = "cancellations_sequence", sequenceName = "cancellations_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "cancellations_sequence")
    private Long id;

    @Column(name = "description")
    private String description;

    @ManyToMany(mappedBy = "cancellations")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();
}
