package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.CancellationDTO;
import com.pi_grupo6.pi.service.implementation.CancellationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.net.URI;

@RestController
@RequestMapping("/cancellations")
@CrossOrigin
public class CancellationController {

    @Autowired
    private CancellationService cancellationService;

    @GetMapping("/allCancellations")
    public Set<CancellationDTO> allCancellations() { return cancellationService.allCancellations(); }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/addCancellation")
    public ResponseEntity<?> addCancellation(@RequestBody CancellationDTO cancellationDTO){
        cancellationService.addCancellation(cancellationDTO);
        URI uri = URI.create("/cancellations/" + cancellationDTO.getId());
        return ResponseEntity.created(uri).body(cancellationDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteCancellation/{id}")
    public ResponseEntity<?> deleteCancellation(@PathVariable Long id) throws NotFoundException {
        cancellationService.deleteCancellation(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateCancellation")
    public ResponseEntity<?> updateCancellation(@RequestBody CancellationDTO cancellationDTO) {
        cancellationService.updateCancellation(cancellationDTO);
        return ResponseEntity.ok(cancellationDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findCancellation/{id}")
    public ResponseEntity<?> findCancellation(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(cancellationService.findCancellation(id));
    }
}
