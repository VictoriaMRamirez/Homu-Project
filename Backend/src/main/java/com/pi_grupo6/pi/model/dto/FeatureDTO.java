package com.pi_grupo6.pi.model.dto;

import com.pi_grupo6.pi.model.entity.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter
public class FeatureDTO {
    private Long id;
    private String icon;
    private String description;
    private Set<Product> products = new HashSet<>();
}