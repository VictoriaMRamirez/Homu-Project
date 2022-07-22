package com.pi_grupo6.pi.repository;

import com.pi_grupo6.pi.model.entity.Safety;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISafetyRepository extends JpaRepository<Safety, Long> {
}
