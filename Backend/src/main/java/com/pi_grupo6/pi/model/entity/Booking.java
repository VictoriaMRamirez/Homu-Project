package com.pi_grupo6.pi.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter @Setter @Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @SequenceGenerator(name = "bookings_sequence", sequenceName = "bookings_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "bookings_sequence")
    private Long id;

    @Column(name = "start_time")
    private String start_time;

    @Column(name = "start_date")
    private LocalDate start_date;

    @Column(name = "finish_date")
    private LocalDate finish_date;

    @Column(name = "vaccinated")
    private Boolean vaccinated;

    @Column(name = "seller_info")
    private String seller_info;

    @ManyToOne
    @JoinColumn(name = "products_id", referencedColumnName = "id", nullable = false)
    private Product products;

    @ManyToOne
    @JoinColumn(name = "users_id", referencedColumnName = "id", nullable = false)
    private User users;
}
