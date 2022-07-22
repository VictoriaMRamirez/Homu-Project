package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.ProductDTO;

import java.util.Set;

public interface IProductService {
    void addProduct(ProductDTO productDTO);
    Set<ProductDTO> allProducts();
    void updateProduct(ProductDTO productDTO);
    void deleteProduct(Long id) throws NotFoundException;
    ProductDTO findProduct(Long id) throws NotFoundException;
    Set<ProductDTO> findAllProductsByCategoriesTitle(String categoryTitle) throws NotFoundException;
    Set<ProductDTO> findAvailableProductById(Set<Long> idProduct, Long cityId);
    Set<ProductDTO> findByCitiesId(Long cityId);
    Set<ProductDTO> findAllProductsByDate(Set<Long> idProduct);
}
