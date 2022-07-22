package com.pi_grupo6.pi.service.implementation;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.BookingDTO;
import com.pi_grupo6.pi.model.entity.Booking;
import com.pi_grupo6.pi.model.entity.Product;
import com.pi_grupo6.pi.repository.IBookingRepository;
import com.pi_grupo6.pi.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class BookingService implements IBookingService {

    @Autowired
    IBookingRepository bookingRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void addBooking(BookingDTO bookingDTO) {
        Booking booking = mapper.convertValue(bookingDTO, Booking.class);
        bookingRepository.save(booking);
    }

    @Override
    public Set<BookingDTO> allBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        Set<BookingDTO> bookingsDTO = new HashSet<>();

        for (Booking booking : bookings){
            bookingsDTO.add(mapper.convertValue(booking, BookingDTO.class));
        }

        return bookingsDTO;
    }

    @Override
    public void updateBooking(BookingDTO bookingDTO) { addBooking(bookingDTO); }

    @Override
    public void deleteBooking(Long id) throws NotFoundException {
        if (findBooking(id) != null) {
            bookingRepository.deleteById(id);
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public BookingDTO findBooking(Long id) throws NotFoundException {
        Optional<Booking> booking = bookingRepository.findById(id);
        BookingDTO bookingDTO = null;

        if (booking.isPresent()) {
            bookingDTO = mapper.convertValue(booking, BookingDTO.class);
            return bookingDTO;
        } else {
            throw new NotFoundException("ID " + id + " not found");
        }
    }

    @Override
    public Set<BookingDTO> findBookingByProduct(Product product) {
        List<Booking> bookingsByProduct = bookingRepository.findBookingByProduct(product);
        Set<BookingDTO> bookingsDTOByProduct = new HashSet<>();

        for (Booking booking : bookingsByProduct) {
            bookingsDTOByProduct.add(mapper.convertValue(booking, BookingDTO.class));
        }

        return bookingsDTOByProduct;
    }

    @Override
    public Set<BookingDTO> findBookingByUserId(Long userId) {
        List<Booking> bookingsByUserId = bookingRepository.findBookingByUserId(userId);
        Set<BookingDTO> bookingsDTOByUserId = new HashSet<>();

        for(Booking booking : bookingsByUserId){
            bookingsDTOByUserId.add(mapper.convertValue(booking, BookingDTO.class));
        }

        return bookingsDTOByUserId;
    }

    @Override
    public Set<BookingDTO> findBookingByDate(LocalDate start_date, LocalDate finish_date) {
        List<Booking> bookings = bookingRepository.findBookingByDate(start_date, finish_date);
        Set<BookingDTO> bookingsDTO = new HashSet<>();

        for (Booking booking : bookings) {
            bookingsDTO.add(mapper.convertValue(booking, BookingDTO.class));
        }

        return bookingsDTO;
    }

    @Override
    public Set<Long> findBookingByDateGetIdProduct(LocalDate start_date, LocalDate finish_date) {
        List<Booking> bookings = bookingRepository.findBookingByDate(start_date, finish_date);
        Set<Long> getIdProductsBookings = new HashSet<>();

        for (Booking booking : bookings) {
            getIdProductsBookings.add(booking.getProducts().getId());
        }

        return getIdProductsBookings;
    }
}
