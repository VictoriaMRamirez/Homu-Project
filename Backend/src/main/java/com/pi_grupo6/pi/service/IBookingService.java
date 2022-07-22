package com.pi_grupo6.pi.service;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.BookingDTO;
import com.pi_grupo6.pi.model.entity.Product;

import java.time.LocalDate;
import java.util.Set;

public interface IBookingService {
    void addBooking(BookingDTO bookingDTO);
    Set<BookingDTO> allBookings();
    void updateBooking(BookingDTO bookingDTO);
    void deleteBooking(Long id) throws NotFoundException;
    BookingDTO findBooking(Long id) throws NotFoundException;
    Set<BookingDTO> findBookingByProduct(Product product);
    Set<BookingDTO> findBookingByUserId(Long userId);
    Set<BookingDTO> findBookingByDate(LocalDate start_date, LocalDate finish_date);
    Set<Long> findBookingByDateGetIdProduct(LocalDate start_date, LocalDate finish_date);
}
