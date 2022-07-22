package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.ImageDTO;

import java.util.Set;

public interface IImageService {
    void addImage(ImageDTO imageDTO);
    Set<ImageDTO> allImages();
    void updateImage(ImageDTO imageDTO);
    void deleteImage(Long id) throws NotFoundException;
    ImageDTO findImage(Long id) throws NotFoundException;
}
