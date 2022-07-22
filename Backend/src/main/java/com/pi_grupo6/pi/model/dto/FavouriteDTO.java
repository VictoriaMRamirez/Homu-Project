package com.pi_grupo6.pi.model.dto;

import com.pi_grupo6.pi.model.entity.Product;
import com.pi_grupo6.pi.model.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FavouriteDTO {
    private Long id;
    private Product products;
    private User users;
}
