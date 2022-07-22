package com.pi_grupo6.pi.model.dto;

import com.pi_grupo6.pi.model.entity.Product;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ImageDTO {
    private Long id;
    private String title;
    private String url;
    private Product products;
}
