package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.CityDTO;

import java.util.Set;

public interface ICityService {
    void addCity(CityDTO cityDTO);
    Set<CityDTO> allCities();
    void updateCity(CityDTO cityDTO);
    void deleteCity(Long id) throws NotFoundException;
    CityDTO findCity(Long id) throws NotFoundException;
}
