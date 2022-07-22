package com.pi_grupo6.pi.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity @Getter @Setter
@Table(name="products")
public class Product {

    @Id
    @SequenceGenerator(name = "products_sequence", sequenceName = "products_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "products_sequence")
    private Long id;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "review")
    private Integer review;

    @Column(name = "location")
    private String location;

    @Column(name = "map_url")
    private String map_url;

    @Column(name = "watch")
    private String watch;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "long_description")
    private String long_description;

    @Column(name = "url")
    private String url;

    @Column(name = "address")
    private String address;

    @ManyToOne
    @JoinColumn(name = "categories_id", referencedColumnName = "id", nullable = false)
    private Category categories;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "products_has_features", joinColumns = @JoinColumn(name = "products_id"), inverseJoinColumns = @JoinColumn(name = "features_id"))
    private Set<Feature> features = new HashSet<>();

    @OneToMany(mappedBy = "products")
    @JsonIgnore
    private Set<Image> images = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "cities_id", referencedColumnName = "id", nullable = false)
    private City cities;

    @OneToMany(mappedBy = "products")
    @JsonIgnore
    private Set<Booking> bookings = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "products_cancellations", joinColumns = @JoinColumn(name = "products_id"), inverseJoinColumns = @JoinColumn(name = "cancellations_id"))
    private Set<Cancellation> cancellations = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "products_rules", joinColumns = @JoinColumn(name = "products_id"), inverseJoinColumns = @JoinColumn(name = "rules_id"))
    private Set<Rule> rules = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "products_safeties", joinColumns = @JoinColumn(name = "products_id"), inverseJoinColumns = @JoinColumn(name = "safeties_id"))
    private Set<Safety> safeties = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "products")
    private Set<Favourite> favourites = new HashSet<>();
}
