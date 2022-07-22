package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.CancellationDTO;

import java.util.Set;

public interface ICancellationService {
    void addCancellation(CancellationDTO cancellationDTO);
    Set<CancellationDTO> allCancellations();
    void updateCancellation(CancellationDTO cancellationDTO);
    void deleteCancellation(Long id) throws NotFoundException;
    CancellationDTO findCancellation(Long id) throws NotFoundException;
}
