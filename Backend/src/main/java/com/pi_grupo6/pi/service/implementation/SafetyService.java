package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.ImageDTO;
import com.pi_grupo6.pi.model.dto.SafetyDTO;
import com.pi_grupo6.pi.model.entity.Image;
import com.pi_grupo6.pi.model.entity.Safety;
import com.pi_grupo6.pi.repository.ISafetyRepository;
import com.pi_grupo6.pi.service.ISafetyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class SafetyService implements ISafetyService {

    @Autowired
    ISafetyRepository safetyRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addSafety(SafetyDTO safetyDTO) {
        Safety safety = mapper.convertValue(safetyDTO, Safety.class);
        safetyRepository.save(safety);
    }

    @Override
    public Set<SafetyDTO> allSafeties() {
        List<Safety> safeties = safetyRepository.findAll();
        Set<SafetyDTO> safetiesDTO = new HashSet<>();

        for (Safety safety : safeties){
            safetiesDTO.add(mapper.convertValue(safety, SafetyDTO.class));
        }

        return safetiesDTO;
    }

    @Override
    public void updateSafety(SafetyDTO safetyDTO) { addSafety(safetyDTO); }

    @Override
    public void deleteSafety(Long id) throws NotFoundException {
        if (findSafety(id) != null) {
            safetyRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public SafetyDTO findSafety(Long id) throws NotFoundException {
        Optional<Safety> safety = safetyRepository.findById(id);
        SafetyDTO safetyDTO = null;

        if (safety.isPresent()) {
            safetyDTO = mapper.convertValue(safety, SafetyDTO.class);
            return safetyDTO;
        }
        else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}
