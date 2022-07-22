package com.pi_grupo6.pi.repository;

import com.pi_grupo6.pi.model.entity.Booking;
import com.pi_grupo6.pi.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IBookingRepository extends JpaRepository<Booking, Long> {

    @Query("SELECT b FROM Booking b WHERE b.products = ?1")
    List<Booking> findBookingByProduct(Product product);

    @Query("SELECT b FROM Booking b WHERE users_id = ?1")
    List<Booking> findBookingByUserId(Long userId);

    @Query("SELECT b FROM Booking b WHERE b.start_date = ?1 AND b.finish_date = ?2")
    List<Booking> findBookingByDate (LocalDate start_date, LocalDate finish_date);
}
