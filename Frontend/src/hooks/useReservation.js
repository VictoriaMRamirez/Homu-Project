import { useCallback } from "react";
import ReservationPost from "../components/services/ReservationPost";

export default function useReservation() {
    const Reservation = useCallback(
        (seller_info, vaccinated, start_time, start_date, finish_date, products, users) => {
            ReservationPost(seller_info, vaccinated, start_time, start_date, finish_date, products, users);
        }, []
    );

    return {
        Reservation
    }
}
