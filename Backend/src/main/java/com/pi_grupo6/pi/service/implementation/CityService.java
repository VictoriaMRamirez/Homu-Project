package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.CityDTO;
import com.pi_grupo6.pi.model.entity.City;
import com.pi_grupo6.pi.repository.ICityRepository;
import com.pi_grupo6.pi.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CityService implements ICityService {

    @Autowired
    ICityRepository cityRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addCity(CityDTO cityDTO){
        City city = mapper.convertValue(cityDTO, City.class);
        cityRepository.save(city);
    }

    @Override
    public Set<CityDTO> allCities() {
        List<City> cities = cityRepository.findAll();
        Set<CityDTO> citiesDTO = new HashSet<>();

        for(City city : cities){
            citiesDTO.add(mapper.convertValue(city, CityDTO.class));
        }

        return citiesDTO;
    }

    @Override
    public void updateCity(CityDTO cityDTO) { addCity(cityDTO); }

    @Override
    public void deleteCity(Long id) throws NotFoundException {
        if (findCity(id) != null) {
            cityRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public CityDTO findCity(Long id) throws NotFoundException {
        Optional<City> city = cityRepository.findById(id);
        CityDTO cityDTO = null;

        if (city.isPresent()) {
            cityDTO = mapper.convertValue(city, CityDTO.class);
            return cityDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}