package com.pi_grupo6.pi.model.dto;

import com.pi_grupo6.pi.model.entity.Product;
import com.pi_grupo6.pi.model.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class BookingDTO {
    private Long id;
    private String start_time;
    private LocalDate start_date;
    private LocalDate finish_date;
    private Product products;
    private User users;
    private Boolean vaccinated;
    private String seller_info;
}
