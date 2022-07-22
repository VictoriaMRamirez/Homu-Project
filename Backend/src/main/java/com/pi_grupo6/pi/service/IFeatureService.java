package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.FeatureDTO;

import java.util.Set;

public interface IFeatureService {
    void addFeature(FeatureDTO featureDTO);
    Set<FeatureDTO> allFeatures();
    void updateFeature(FeatureDTO featureDTO);
    void deleteFeature(Long id) throws NotFoundException;
    FeatureDTO findFeature(Long id) throws NotFoundException;
}
