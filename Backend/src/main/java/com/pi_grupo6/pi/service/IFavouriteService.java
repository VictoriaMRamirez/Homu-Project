package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.FavouriteDTO;

import java.util.Set;

public interface IFavouriteService {
    void addFavourite(FavouriteDTO favouriteDTO);
    Set<FavouriteDTO> allFavourites();
    void updateFavourite(FavouriteDTO favouriteDTO);
    void deleteFavourite(Long id) throws NotFoundException;
    FavouriteDTO findFavourite(Long id) throws NotFoundException;
}
