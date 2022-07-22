package com.pi_grupo6.pi.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity @Getter @Setter
@Table(name="categories")
public class Category {

    @Id
    @SequenceGenerator(name = "categories_sequence", sequenceName = "categories_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "categories_sequence")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "url")
    private String url;

    @JsonIgnore
    @OneToMany(mappedBy = "categories")
    private Set<Product> products = new HashSet<>();
}
