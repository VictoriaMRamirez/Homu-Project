package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.RoleDTO;
import com.pi_grupo6.pi.service.implementation.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("/roles")
@CrossOrigin
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/allRoles")
    public Set<RoleDTO> allRoles() { return roleService.allRoles(); }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/addRole")
    public ResponseEntity<?> addRole(@RequestBody RoleDTO roleDTO) {
        roleService.addRole(roleDTO);
        URI uri = URI.create("/roles/" + roleDTO.getId());
        return ResponseEntity.created(uri).body(roleDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteRole/{id}")
    public ResponseEntity<?> deleteRole(@PathVariable Long id) throws NotFoundException {
        roleService.deleteRole(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateRole")
    public ResponseEntity<?> updateRole(@RequestBody RoleDTO roleDTO) {
        roleService.updateRole(roleDTO);
        return ResponseEntity.ok(roleDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findRole/{id}")
    public ResponseEntity<?> findRole(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(roleService.findRole(id));
    }
}
