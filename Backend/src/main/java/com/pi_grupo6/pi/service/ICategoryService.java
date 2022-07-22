package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.CategoryDTO;

import java.util.Set;

public interface ICategoryService {
    void addCategory(CategoryDTO categoryDTO);
    Set<CategoryDTO> allCategories();
    void updateCategory(CategoryDTO categoryDTO);
    void deleteCategory(Long id) throws NotFoundException;
    CategoryDTO findCategory(Long id) throws NotFoundException;
}
