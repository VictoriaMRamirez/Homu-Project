package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.RoleDTO;

import java.util.Set;

public interface IRoleService {
    void addRole(RoleDTO roleDTO);
    Set<RoleDTO> allRoles();
    void updateRole(RoleDTO roleDTO);
    void deleteRole(Long id) throws NotFoundException;
    RoleDTO findRole(Long id) throws NotFoundException;
}
