package com.pi_grupo6.pi.model.dto;

import com.pi_grupo6.pi.model.entity.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter
public class ProductDTO {
    private Long id;
    private Integer rating;
    private Integer review;
    private String location;
    private String map_url;
    private String watch;
    private String title;
    private String description;
    private String long_description;
    private String url;
    private String address;
    private Category categories;
    private Set<Feature> features = new HashSet<>();
    private Set<Image> images = new HashSet<>();
    private City cities;
    private Set<Booking> bookings = new HashSet<>();
    private Set<User> users = new HashSet<>();
    private Set<Cancellation> cancellations = new HashSet<>();
    private Set<Rule> rules = new HashSet<>();
    private Set<Safety> safeties = new HashSet<>();
    private Set<Favourite> favourites = new HashSet<>();
}
