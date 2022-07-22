package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.CategoryDTO;
import com.pi_grupo6.pi.model.entity.Category;
import com.pi_grupo6.pi.repository.ICategoryRepository;
import com.pi_grupo6.pi.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    ICategoryRepository categoryRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addCategory(CategoryDTO categoryDTO){
        Category category = mapper.convertValue(categoryDTO, Category.class);
        categoryRepository.save(category);
    }

    @Override
    public Set<CategoryDTO> allCategories() {
        List<Category> categories = categoryRepository.findAll();
        Set<CategoryDTO> categoriesDTO = new HashSet<>();

        for(Category category : categories){
            categoriesDTO.add(mapper.convertValue(category, CategoryDTO.class));
        }

        return categoriesDTO;
    }

    @Override
    public void updateCategory(CategoryDTO categoryDTO) { addCategory(categoryDTO); }

    @Override
    public void deleteCategory(Long id) throws NotFoundException {
        if (findCategory(id) != null) {
            categoryRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public CategoryDTO findCategory(Long id) throws NotFoundException {
        Optional<Category> category = categoryRepository.findById(id);
        CategoryDTO categoryDTO = null;

        if (category.isPresent()) {
            categoryDTO = mapper.convertValue(category, CategoryDTO.class);
            return categoryDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }
}