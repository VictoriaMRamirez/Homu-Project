package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.SafetyDTO;
import com.pi_grupo6.pi.service.implementation.SafetyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("/safeties")
@CrossOrigin
public class SafetyController {

    @Autowired
    private SafetyService safetyService;

    @GetMapping("/allSafeties")
    public Set<SafetyDTO> allSafeties() { return safetyService.allSafeties(); }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/addSafety")
    public ResponseEntity<?> addSafety(@RequestBody SafetyDTO safetyDTO){
        safetyService.addSafety(safetyDTO);
        URI uri = URI.create("/safeties/" + safetyDTO.getId());
        return ResponseEntity.created(uri).body(safetyDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteSafety/{id}")
    public ResponseEntity<?> deleteSafety(@PathVariable Long id) throws NotFoundException {
        safetyService.deleteSafety(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateSafety")
    public ResponseEntity<?> updateSafety(@RequestBody SafetyDTO safetyDTO) {
        safetyService.updateSafety(safetyDTO);
        return ResponseEntity.ok(safetyDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findSafety/{id}")
    public ResponseEntity<?> findSafety(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(safetyService.findSafety(id));
    }
}
