import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "../../styles/Accesories/CalendarDetail.css";
import { isWithinInterval } from "date-fns";
import useFetchAuth from '../../hooks/useFetchAuth';

function CalendarDetail() {
    const productId = localStorage.getItem("idProduct");
    const { data } = useFetchAuth(`/bookings/findBookingByProduct/${productId}`);
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
        if (view === 'month') {
            return isWithinRanges(date, bookingsDates);
        }
    }

    return (
        <Calendar
            showDoubleView={true}
            selectRange={true}
            minDate={new Date()}
            maxDate={new Date(2023, 11, 16)}
            tileDisabled={tileDisabled}
            onChange={(date) => {
                localStorage.setItem('date', JSON.stringify((date[0])).substring(1, 11));
                localStorage.setItem('date2', JSON.stringify((date[1])).substring(1, 11));
                console.log(localStorage.getItem('date'));
                console.log(localStorage.getItem('date2'));
                console.log(bookingsDates);
            }}
        />
    );

};

export default CalendarDetail;