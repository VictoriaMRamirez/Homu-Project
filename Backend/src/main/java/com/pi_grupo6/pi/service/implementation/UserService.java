package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.gravatar.Gravatar;
import com.pi_grupo6.pi.model.dto.UserDTO;
import com.pi_grupo6.pi.model.entity.User;
import com.pi_grupo6.pi.repository.IUserRepository;
import com.pi_grupo6.pi.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService implements IUserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    ObjectMapper mapper;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public void addUser(UserDTO userDTO) {
        User user = mapper.convertValue(userDTO, User.class);

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(userDTO.getPassword());
        userDTO.setPassword(encodedPassword);
        user.setPassword(encodedPassword);

        String email = user.getEmail();
        Gravatar avatar = new Gravatar();
        user.setAvatar(avatar.getUrl(email));

        userRepository.save(user);
    }

    @Override
    public Set<UserDTO> allUsers() {
        List<User> users = userRepository.findAll();
        Set<UserDTO> usersDTO = new HashSet<>();

        for (User user : users){
            usersDTO.add(mapper.convertValue(user, UserDTO.class));
        }

        return usersDTO;
    }

    @Override
    public void updateUser(UserDTO userDTO) { addUser(userDTO); }

    @Override
    public void deleteUser(Long id) throws NotFoundException {
        if (findUser(id) != null) {
            userRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public UserDTO findUser(Long id) throws NotFoundException {
        Optional<User> user = userRepository.findById(id);
        UserDTO userDTO = null;

        if (user.isPresent()) {
            userDTO = mapper.convertValue(user, UserDTO.class);
            return userDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}
