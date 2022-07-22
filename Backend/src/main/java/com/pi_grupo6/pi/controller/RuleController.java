package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.RuleDTO;
import com.pi_grupo6.pi.service.implementation.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("/rules")
@CrossOrigin
public class RuleController {

    @Autowired
    private RuleService ruleService;

    @GetMapping("/allRules")
    public Set<RuleDTO> allRules() { return ruleService.allRules(); }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/addRule")
    public ResponseEntity<?> addRule(@RequestBody RuleDTO ruleDTO){
        ruleService.addRule(ruleDTO);
        URI uri = URI.create("/rules/" + ruleDTO.getId());
        return ResponseEntity.created(uri).body(ruleDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteRule/{id}")
    public ResponseEntity<?> deleteRule(@PathVariable Long id) throws NotFoundException {
        ruleService.deleteRule(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateRule")
    public ResponseEntity<?> updateRule(@RequestBody RuleDTO ruleDTO) {
        ruleService.updateRule(ruleDTO);
        return ResponseEntity.ok(ruleDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findRule/{id}")
    public ResponseEntity<?> findRule(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(ruleService.findRule(id));
    }
}
