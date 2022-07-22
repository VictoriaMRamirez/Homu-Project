package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.UserDTO;
import com.pi_grupo6.pi.service.implementation.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/allUsers")
    public Set<UserDTO> allUsers() { return userService.allUsers(); }

    @PostMapping("/register")
    public ResponseEntity<?> addUser(@RequestBody UserDTO userDTO) {
        userService.addUser(userDTO);
        URI uri = URI.create("/users/" + userDTO.getId());
        return ResponseEntity.created(uri).body(userDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) throws NotFoundException {
        userService.deleteUser(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateUser")
    public ResponseEntity<?> updateUser(@RequestBody UserDTO userDTO) {
        userService.updateUser(userDTO);
        return ResponseEntity.ok(userDTO);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/findUser/{id}")
    public ResponseEntity<?> findUser(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(userService.findUser(id));
    }
}
