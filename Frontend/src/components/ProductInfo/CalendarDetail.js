import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import useFetchAuth from '../../hooks/useFetchAuth';
import "../../styles/Accesories/CalendarDetail.css";
import { isWithinInterval } from "date-fns";

function CalendarDetail() {
    const { data, isLoaded } = useFetchAuth("/bookings/allBookings");

    const bookingsDates = data.map((bookings, index) => {
        return (
            [new Date(bookings.start_date),
            new Date(bookings.finish_date)]
        )
    });

    function isWithinRange(date, range) {
        return isWithinInterval(date, { start: range[0], end: range[1] });
    }

    function isWithinRanges(date, ranges) {
        return ranges.some(range => isWithinRange(date, range));
    }

    function tileDisabled({ date, view }) {
        // Add class to tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is within any of the ranges
            return isWithinRanges(date, bookingsDates);
        }
    }

    return (
        <Calendar
            selectRange={true}
            minDate={new Date()}
            maxDate={new Date(2023, 11, 16)}
            tileDisabled={tileDisabled}
            onChange={(date) => {
                localStorage.setItem('date', JSON.stringify((date[0])));
                localStorage.setItem('date2', JSON.stringify((date[1])))
            }}
        />
    );
};

export default CalendarDetail;