package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.FavouriteDTO;
import com.pi_grupo6.pi.model.entity.Favourite;
import com.pi_grupo6.pi.repository.IFavouriteRepository;
import com.pi_grupo6.pi.service.IFavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class FavouriteService implements IFavouriteService {

    @Autowired
    IFavouriteRepository favouriteRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addFavourite(FavouriteDTO favouriteDTO) {
        Favourite favourite = mapper.convertValue(favouriteDTO, Favourite.class);
        favouriteRepository.save(favourite);
    }

    @Override
    public Set<FavouriteDTO> allFavourites() {
        List<Favourite> favourites = favouriteRepository.findAll();
        Set<FavouriteDTO> favouritesDTO = new HashSet<>();

        for (Favourite favourite : favourites){
            favouritesDTO.add(mapper.convertValue(favourite, FavouriteDTO.class));
        }

        return favouritesDTO;
    }

    @Override
    public void updateFavourite(FavouriteDTO favouriteDTO) { addFavourite(favouriteDTO); }

    @Override
    public void deleteFavourite(Long id) throws NotFoundException {
        if (findFavourite(id) != null) {
            favouriteRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public FavouriteDTO findFavourite(Long id) throws NotFoundException {
        Optional<Favourite> favourite = favouriteRepository.findById(id);
        FavouriteDTO favouriteDTO = null;

        if (favourite.isPresent()) {
            favouriteDTO = mapper.convertValue(favourite, FavouriteDTO.class);
            return favouriteDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}

