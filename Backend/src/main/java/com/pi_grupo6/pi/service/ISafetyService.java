package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.SafetyDTO;

import java.util.Set;

public interface ISafetyService {
    void addSafety(SafetyDTO safetyDTO);
    Set<SafetyDTO> allSafeties();
    void updateSafety(SafetyDTO safetyDTO);
    void deleteSafety(Long id) throws NotFoundException;
    SafetyDTO findSafety(Long id) throws NotFoundException;
}
