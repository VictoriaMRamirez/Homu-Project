package com.pi_grupo6.pi.model.dto;

import com.pi_grupo6.pi.model.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter
public class RoleDTO {
    private Long id;
    private String name;
    private Set<User> users = new HashSet<>();
}
