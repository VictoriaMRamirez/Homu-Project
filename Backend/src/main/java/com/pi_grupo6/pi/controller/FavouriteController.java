package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.FavouriteDTO;
import com.pi_grupo6.pi.service.implementation.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("/favourites")
@CrossOrigin
public class FavouriteController {

    @Autowired
    private FavouriteService favouriteService;

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/allFavourites")
    public Set<FavouriteDTO> allFavourites() { return favouriteService.allFavourites(); }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @PostMapping("/addFavourite")
    public ResponseEntity<?> addFavourites(@RequestBody FavouriteDTO favouriteDTO) {
        favouriteService.addFavourite(favouriteDTO);
        URI uri = URI.create("/favourites/" + favouriteDTO.getId());
        return ResponseEntity.created(uri).body(favouriteDTO);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @DeleteMapping("/deleteFavourite/{id}")
    public ResponseEntity<?> deleteFavourite(@PathVariable Long id) throws NotFoundException {
        favouriteService.deleteFavourite(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN', 'USER')")
    @PutMapping("/updateScore")
    public ResponseEntity<?> updateFavourite(@RequestBody FavouriteDTO favouriteDTO) {
        favouriteService.updateFavourite(favouriteDTO);
        return ResponseEntity.ok(favouriteDTO);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/findFavourite/{id}")
    public ResponseEntity<?> findFavourite(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(favouriteService.findFavourite(id));
    }
}