package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.ProductDTO;
import com.pi_grupo6.pi.model.entity.Product;
import com.pi_grupo6.pi.repository.IProductRepository;
import com.pi_grupo6.pi.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService implements IProductService {

    @Autowired
    IProductRepository productRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addProduct(ProductDTO productDTO){
        Product product = mapper.convertValue(productDTO, Product.class);
        productRepository.save(product);
    }

    @Override
    public Set<ProductDTO> allProducts() {
        List<Product> products = productRepository.findAll();
        Set<ProductDTO> productsDTO = new HashSet<>();

        for(Product product : products){
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return productsDTO;
    }

    @Override
    public void updateProduct(ProductDTO productDTO) { addProduct(productDTO); }

    @Override
    public void deleteProduct(Long id) throws NotFoundException {
        if (findProduct(id) != null) {
            productRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public ProductDTO findProduct(Long id) throws NotFoundException {
        Optional<Product> product = productRepository.findById(id);
        ProductDTO productDTO = null;

        if (product.isPresent()) {
            productDTO = mapper.convertValue(product, ProductDTO.class);
            return productDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public Set<ProductDTO> findAllProductsByCategoriesTitle(String categoryTitle) throws NotFoundException {
        List<Product> productsByCategory = productRepository.findAllProductsByCategoriesTitle(categoryTitle);
        Set<ProductDTO> productsDTOByCategory = new HashSet<>();

        for (Product product : productsByCategory) {
            productsDTOByCategory.add(mapper.convertValue(product, ProductDTO.class));
        }

        if (productsDTOByCategory.isEmpty()) {
            throw new NotFoundException("Product not found in searched category.");
        } else {
            return productsDTOByCategory;
        }
    }

    @Override
    public Set<ProductDTO> findAvailableProductById(Set<Long> idProduct, Long cityId) {
        List<Product> availableProduct = productRepository.findAvailableProductById(idProduct, cityId);
        Set<ProductDTO> availableProductDTO = new HashSet<>();

        for(Product product: availableProduct){
            availableProductDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return availableProductDTO;
    }

    @Override
    public Set<ProductDTO> findByCitiesId(Long cityId) {
        List<Product> productsByCityId = productRepository.findByCitiesId(cityId);
        Set<ProductDTO> productDTOByCityId = new HashSet<>();

        for(Product product : productsByCityId){
            productDTOByCityId.add(mapper.convertValue(product, ProductDTO.class));
        }

        return productDTOByCityId;
    }

    @Override
    public Set<ProductDTO> findAllProductsByDate(Set<Long> idProduct) {
        List<Product> productsByDate = productRepository.findAllProductsByDate(idProduct);
        Set<ProductDTO> productsByDateDTO = new HashSet<>();

        for(Product product : productsByDate){
            productsByDateDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return productsByDateDTO;
    }
}