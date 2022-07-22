import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

function MyBookingCard(props) {
    return (
        <div className="reservationCardHotel">
            <h2 className="reservationCardTitle">Detalle de la reserva</h2>
            <div className="reservationCardInfo">
                <section className="reservationCardImage">
                    <img
                        src={props.url}
                        alt={props.title}
                        className="reservationCardImage"
                    />
                </section>
                <div className="reservationCardInfoFlex">
                    <h3 className="reservationCardCategory">{props.categories}</h3>
                    <h3 className="reservationCardName">{props.title}</h3>
                    <span className="reservationRating">
                        {Array(props.rating)
                            .fill()
                            .map((_, index) => (
                                <p key={index} className="reservationStars">
                                    ⭐
                                </p>
                            ))}
                    </span>
                    <h3 className="reservationCities">
                        <FaMapMarkerAlt className="productIconMap" />
                        {props.cities}
                    </h3>
                    <hr className="hrReservation"></hr>
                    <section className="reservationCheckInOutContainer">
                        <p className="reservationCheckInOut">Check in </p>
                        <span>{props.start_date}</span>
                    </section>
                    <hr className="hrReservation"></hr>
                    <section className="reservationCheckInOutContainer">
                        <p className="reservationCheckInOut">Check out</p>
                        <span>{props.finish_date}</span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default MyBookingCard;