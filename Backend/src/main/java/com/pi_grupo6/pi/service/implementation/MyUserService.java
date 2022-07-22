package com.pi_grupo6.pi.service.implementation;

import com.pi_grupo6.pi.model.entity.User;
import com.pi_grupo6.pi.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyUserService implements UserDetailsService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println("Consulta email " + email + " en BD");
        User user = userRepository.findByEmail(email);

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRoles().getName()));

        System.out.println("Usuario autenticado: " + email);

        return new org.springframework.security.core.userdetails.User(email, user.getPassword(), true, true, true, true, authorities);
    }
}
