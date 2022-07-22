package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.ProductDTO;
import com.pi_grupo6.pi.service.implementation.BookingService;
import com.pi_grupo6.pi.service.implementation.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDate;
import java.util.Set;

@RestController
@RequestMapping("/products")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private BookingService bookingService;

    @GetMapping("/allProducts")
    public Set<ProductDTO> allProducts() { return productService.allProducts(); }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/addProduct")
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO){
        productService.addProduct(productDTO);
        URI uri = URI.create("/products/" + productDTO.getId());
        return ResponseEntity.created(uri).body(productDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) throws NotFoundException{
        productService.deleteProduct(id);
        return ResponseEntity.ok("ID " + id + " was deleted.");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateProduct")
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO) {
        productService.updateProduct(productDTO);
        return ResponseEntity.ok(productDTO);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findProduct/{id}")
    public ResponseEntity<?> findProduct(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(productService.findProduct(id));
    }

    @GetMapping("/categories/{categoriesTitle}")
    public Set<ProductDTO> findAllProductsByCategoriesTitle(@PathVariable ("categoriesTitle") String categoriesTitle) throws NotFoundException {
        return productService.findAllProductsByCategoriesTitle(categoriesTitle);
    }

    @GetMapping("/productsAvailable/{start_date}/{finish_date}/{cityId}")
    public ResponseEntity<?> findAvailableProducts(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start_date,
                                                   @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate finish_date,
                                                   @PathVariable Long cityId)  {

        Set<Long> idProductsBookings = bookingService.findBookingByDateGetIdProduct(start_date, finish_date);
        idProductsBookings.add(0L);

        Set<ProductDTO> productsAvailable = productService.findAvailableProductById(idProductsBookings, cityId);

        return ResponseEntity.ok(productsAvailable);
    }

    @GetMapping("/cities/{cityId}")
    public Set<ProductDTO> findAllProductsByCitiesId(@PathVariable ("cityId") Long cityId){
        return productService.findByCitiesId(cityId);
    }

    @GetMapping("/productsAvailable/byDate/{start_date}/{finish_date}")
    public ResponseEntity<?> findAvailableProducts(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start_date,
                                                   @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate finish_date) {

        Set<Long> idProductsBookings = bookingService.findBookingByDateGetIdProduct(start_date, finish_date);
        idProductsBookings.add(0L);

        Set<ProductDTO> productsAvailable = productService.findAllProductsByDate(idProductsBookings);

        return ResponseEntity.ok(productsAvailable);
    }
}
