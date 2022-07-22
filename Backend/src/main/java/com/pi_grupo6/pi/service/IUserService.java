package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.UserDTO;

import java.util.Set;

public interface IUserService {
    void addUser(UserDTO userDTO);
    Set<UserDTO> allUsers();
    void updateUser(UserDTO userDTO);
    void deleteUser(Long id) throws NotFoundException;
    UserDTO findUser(Long id) throws NotFoundException;
}
