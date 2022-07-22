package com.pi_grupo6.pi.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter
@Table(name="images")
public class Image {

    @Id
    @SequenceGenerator(name = "images_sequence", sequenceName = "images_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "images_sequence")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "url")
    private String url;

    @ManyToOne
    @JoinColumn(name = "products_id", referencedColumnName = "id", nullable = false)
    private Product products;
}
