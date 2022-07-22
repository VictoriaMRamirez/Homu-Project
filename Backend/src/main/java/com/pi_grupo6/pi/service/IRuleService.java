package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.RuleDTO;

import java.util.Set;

public interface IRuleService {
    void addRule(RuleDTO ruleDTO);
    Set<RuleDTO> allRules();
    void updateRule(RuleDTO ruleDTO);
    void deleteRule(Long id) throws NotFoundException;
    RuleDTO findRule(Long id) throws NotFoundException;
}
