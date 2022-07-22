package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.RoleDTO;
import com.pi_grupo6.pi.model.entity.Role;
import com.pi_grupo6.pi.repository.IRoleRepository;
import com.pi_grupo6.pi.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class RoleService implements IRoleService {

    @Autowired
    IRoleRepository roleRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addRole(RoleDTO roleDTO) {
        Role role = mapper.convertValue(roleDTO, Role.class);
        roleRepository.save(role);
    }

    @Override
    public Set<RoleDTO> allRoles() {
        List<Role> roles = roleRepository.findAll();
        Set<RoleDTO> rolesDTO = new HashSet<>();

        for (Role role : roles){
            rolesDTO.add(mapper.convertValue(role, RoleDTO.class));
        }

        return rolesDTO;
    }

    @Override
    public void updateRole(RoleDTO roleDTO) { addRole(roleDTO); }

    @Override
    public void deleteRole(Long id) throws NotFoundException {
        if (findRole(id) != null) {
            roleRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public RoleDTO findRole(Long id) throws NotFoundException {
        Optional<Role> role = roleRepository.findById(id);
        RoleDTO roleDTO = null;

        if (role.isPresent()) {
            roleDTO = mapper.convertValue(role, RoleDTO.class);
            return roleDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}
