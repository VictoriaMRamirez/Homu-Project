package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.RuleDTO;
import com.pi_grupo6.pi.model.entity.Rule;
import com.pi_grupo6.pi.repository.IRuleRepository;
import com.pi_grupo6.pi.service.IRuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class RuleService implements IRuleService {

    @Autowired
    IRuleRepository ruleRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addRule(RuleDTO ruleDTO) {
        Rule rule = mapper.convertValue(ruleDTO, Rule.class);
        ruleRepository.save(rule);
    }

    @Override
    public Set<RuleDTO> allRules() {
        List<Rule> rules = ruleRepository.findAll();
        Set<RuleDTO> rulesDTO = new HashSet<>();

        for (Rule rule : rules){
            rulesDTO.add(mapper.convertValue(rule, RuleDTO.class));
        }

        return rulesDTO;
    }

    @Override
    public void updateRule(RuleDTO ruleDTO) { addRule(ruleDTO); }

    @Override
    public void deleteRule(Long id) throws NotFoundException {
        if (findRule(id) != null) {
            ruleRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public RuleDTO findRule(Long id) throws NotFoundException {
        Optional<Rule> rule = ruleRepository.findById(id);
        RuleDTO ruleDTO = null;

        if (rule.isPresent()) {
            ruleDTO = mapper.convertValue(rule, RuleDTO.class);
            return ruleDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}
