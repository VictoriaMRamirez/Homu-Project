package com.pi_grupo6.pi.controller;

import com.pi_grupo6.pi.exception.NotFoundException;
import com.pi_grupo6.pi.model.dto.BookingDTO;
import com.pi_grupo6.pi.model.entity.Product;
import com.pi_grupo6.pi.service.implementation.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDate;
import java.util.Set;

@RestController
@RequestMapping("/bookings")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/allBookings")
    public Set<BookingDTO> allBookings() { return bookingService.allBookings(); }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @PostMapping("/addBooking")
    public ResponseEntity<?> addBooking(@RequestBody BookingDTO bookingDTO) {
        bookingService.addBooking(bookingDTO);
        URI uri = URI.create("/bookings/" + bookingDTO.getId());
        return ResponseEntity.created(uri).body(bookingDTO);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @DeleteMapping("/deleteBooking/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable Long id) throws NotFoundException {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok("ID " + id + " was deleted");
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @PutMapping("/updateBooking")
    public ResponseEntity<?> updateBooking(@RequestBody BookingDTO bookingDTO) {
        bookingService.updateBooking(bookingDTO);
        return ResponseEntity.ok(bookingDTO);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/findBooking/{id}")
    public ResponseEntity<?> findBooking(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(bookingService.findBooking(id));
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/findBookingByProduct/{product}")
    public Set<BookingDTO> bookingByProduct(@PathVariable Product product){
        return bookingService.findBookingByProduct(product);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("/findBookingByUserId/{userId}")
    public Set<BookingDTO> bookingByUserId(@PathVariable Long userId){
        return bookingService.findBookingByUserId(userId);
    }

    @GetMapping("/bookingByDate/{start_date}/{finish_date}")
    public Set<BookingDTO> findBookingByDate(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start_date,
                                             @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate finish_date) {

        return bookingService.findBookingByDate(start_date, finish_date);
    }
}
