package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.ImageDTO;
import com.pi_grupo6.pi.model.entity.Image;
import com.pi_grupo6.pi.repository.IImageRepository;
import com.pi_grupo6.pi.service.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ImageService implements IImageService {

    @Autowired
    IImageRepository imageRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addImage(ImageDTO imageDTO){
        Image image = mapper.convertValue(imageDTO, Image.class);
        imageRepository.save(image);
    }

    @Override
    public Set<ImageDTO> allImages() {
        List<Image> images = imageRepository.findAll();
        Set<ImageDTO> imagesDTO = new HashSet<>();

        for (Image image : images){
            imagesDTO.add(mapper.convertValue(image, ImageDTO.class));
        }

        return imagesDTO;
    }

    @Override
    public void updateImage(ImageDTO imageDTO) { addImage(imageDTO); }

    @Override
    public void deleteImage(Long id) throws NotFoundException {
        if (findImage(id) != null) {
            imageRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public ImageDTO findImage(Long id) throws NotFoundException {
        Optional<Image> image = imageRepository.findById(id);
        ImageDTO imageDTO = null;

        if (image.isPresent()) {
            imageDTO = mapper.convertValue(image, ImageDTO.class);
            return imageDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}
