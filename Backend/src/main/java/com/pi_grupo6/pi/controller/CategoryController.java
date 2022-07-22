package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.CategoryDTO;
import com.pi_grupo6.pi.service.implementation.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/allCategories")
    public Set<CategoryDTO> allCategories() { return categoryService.allCategories(); }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/addCategory")
    public ResponseEntity<?> addCategory(@RequestBody CategoryDTO categoryDTO) {
        categoryService.addCategory(categoryDTO);
        URI uri = URI.create("/categories/" + categoryDTO.getId());
        return ResponseEntity.created(uri).body(categoryDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteCategory/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) throws NotFoundException {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateCategory")
    public ResponseEntity<?> updateCategory(@RequestBody CategoryDTO categoryDTO) {
        categoryService.updateCategory(categoryDTO);
        return ResponseEntity.ok(categoryDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findCategory/{id}")
    public ResponseEntity<?> findCategory(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(categoryService.findCategory(id));
    }
}
