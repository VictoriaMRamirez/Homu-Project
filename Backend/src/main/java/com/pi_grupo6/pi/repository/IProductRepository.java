package com.pi_grupo6.pi.repository;

import com.pi_grupo6.pi.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query
    List<Product> findAllProductsByCategoriesTitle(String categoriesTitle);

    @Query("SELECT DISTINCT p FROM Product p WHERE p.id not in ?1 AND cities_id= ?2")
    List<Product> findAvailableProductById(Set<Long> idProduct, Long idCity);

    @Query("SELECT p FROM Product p WHERE cities_id = ?1")
    List<Product> findByCitiesId(Long cityId);

    @Query("SELECT DISTINCT p FROM Product p WHERE p.id not in ?1")
    List<Product> findAllProductsByDate(Set<Long> idProduct);
}