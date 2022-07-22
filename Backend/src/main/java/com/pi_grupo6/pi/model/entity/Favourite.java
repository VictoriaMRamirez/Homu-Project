package com.pi_grupo6.pi.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter
@Table(name="favourites")
public class Favourite {

    @Id
    @SequenceGenerator(name = "favourites_sequence", sequenceName = "favourites_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "favourites_sequence")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "products_id", referencedColumnName = "id", nullable = false)
    private Product products;

    @ManyToOne
    @JoinColumn(name = "users_id", referencedColumnName = "id", nullable = false)
    private User users;
}
