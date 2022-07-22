package com.pi_grupo6.pi.repository;

import com.pi_grupo6.pi.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
