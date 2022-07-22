package com.pi_grupo6.pi.model.dto;

import com.pi_grupo6.pi.model.entity.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter
public class UserDTO {
    private Long id;
    private String name;
    private String avatar;
    private String surname;
    private String email;
    private String password;
    private String city;
    private Set<Booking> bookings = new HashSet<>();
    private Role roles;
    //private Set<Product> products = new HashSet<>();
    private Set<Favourite> favourites = new HashSet<>();
}
