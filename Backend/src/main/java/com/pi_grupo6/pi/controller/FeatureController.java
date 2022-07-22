package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.FeatureDTO;
import com.pi_grupo6.pi.service.implementation.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("/features")
@CrossOrigin
public class FeatureController {

    @Autowired
    private FeatureService featureService;

    @GetMapping("/allFeatures")
    public Set<FeatureDTO> allFeatures() { return featureService.allFeatures(); }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/addFeature")
    public ResponseEntity<?> addFeature(@RequestBody FeatureDTO featureDTO) {
        featureService.addFeature(featureDTO);
        URI uri = URI.create("/features/" + featureDTO.getId());
        return ResponseEntity.created(uri).body(featureDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteFeature/{id}")
    public ResponseEntity<?> deleteFeature(@PathVariable Long id) throws NotFoundException {
        featureService.deleteFeature(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateFeature")
    public ResponseEntity<?> updateFeature(@RequestBody FeatureDTO featureDTO) {
        featureService.updateFeature(featureDTO);
        return ResponseEntity.ok(featureDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findFeature/{id}")
    public ResponseEntity<?> findFeature(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(featureService.findFeature(id));
    }
}