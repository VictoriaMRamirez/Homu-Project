package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.CancellationDTO;
import com.pi_grupo6.pi.model.entity.Cancellation;
import com.pi_grupo6.pi.repository.ICancellationRepository;
import com.pi_grupo6.pi.service.ICancellationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CancellationService implements ICancellationService {

    @Autowired
    ICancellationRepository cancellationRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addCancellation(CancellationDTO cancellationDTO) {
        Cancellation cancellationPolicy = mapper.convertValue(cancellationDTO, Cancellation.class);
        cancellationRepository.save(cancellationPolicy);
    }

    @Override
    public Set<CancellationDTO> allCancellations() {
        List<Cancellation> cancellations = cancellationRepository.findAll();
        Set<CancellationDTO> cancellationsDTO = new HashSet<>();

        for (Cancellation cancellation : cancellations){
            cancellationsDTO.add(mapper.convertValue(cancellation, CancellationDTO.class));
        }

        return cancellationsDTO;
    }

    @Override
    public void updateCancellation(CancellationDTO cancellationDTO) { addCancellation(cancellationDTO); }

    @Override
    public void deleteCancellation(Long id) throws NotFoundException {
        if (findCancellation(id) != null) {
            cancellationRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public CancellationDTO findCancellation(Long id) throws NotFoundException {
        Optional<Cancellation> cancellation = cancellationRepository.findById(id);
        CancellationDTO cancellationDTO = null;

        if (cancellation.isPresent()) {
            cancellationDTO = mapper.convertValue(cancellation, CancellationDTO.class);
            return cancellationDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}
