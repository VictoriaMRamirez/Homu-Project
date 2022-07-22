import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import "../../styles/Components/ReservationSuccess.css";

function ReservationSuccess(props) {
    return (
        <section className="reservationSuccess">
            <Header />

            <div className='reservationSuccessContainer'>
                <IoIosCheckmarkCircle className='reservationSuccessIcon' />
                <h1>¡Muchas gracias!</h1>
                <p>{props.description}</p>
                <button>
                    <Link to="/">OK</Link>
                </button>
            </div>
            
            <Footer />
        </section>
    )
}

export default ReservationSuccess;