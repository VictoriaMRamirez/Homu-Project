package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.FeatureDTO;
import com.pi_grupo6.pi.model.entity.Feature;
import com.pi_grupo6.pi.repository.IFeatureRepository;
import com.pi_grupo6.pi.service.IFeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class FeatureService implements IFeatureService {

    @Autowired
    IFeatureRepository featureRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addFeature(FeatureDTO featureDTO){
        Feature feature = mapper.convertValue(featureDTO, Feature.class);
        featureRepository.save(feature);
    }

    @Override
    public Set<FeatureDTO> allFeatures() {
        List<Feature> features = featureRepository.findAll();
        Set<FeatureDTO> featuresDTO = new HashSet<>();

        for (Feature feature : features){
            featuresDTO.add(mapper.convertValue(feature, FeatureDTO.class));
        }

        return featuresDTO;
    }

    @Override
    public void updateFeature(FeatureDTO featureDTO) { addFeature(featureDTO); }

    @Override
    public void deleteFeature(Long id) throws NotFoundException {
        if (findFeature(id) != null) {
            featureRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public FeatureDTO findFeature(Long id) throws NotFoundException {
        Optional<Feature> feature = featureRepository.findById(id);
        FeatureDTO featureDTO = null;

        if (feature.isPresent()) {
            featureDTO = mapper.convertValue(feature, FeatureDTO.class);
            return featureDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}
