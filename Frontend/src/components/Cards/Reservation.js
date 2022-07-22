import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CardReservation from './CardReservation';
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import "../../styles/Components/ProductDetails.css";
import "../../styles/Components/Reservation.css";

function Reservation() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const { productId } = useParams();

    const reservationProduct = data.map((product) => {
        if (product.title == productId) {
            return (
                <CardReservation
                    key={product.id}
                    id={product.id}
                    categories={product.categories.title}
                    title={product.title}
                    rating={product.rating}
                    cities={product.cities.name}
                    images={product.url}
                />
            )}
    })

    return (
        <>
            <Header />
            {isLoaded ? reservationProduct : <div>Cargando...</div>}
            <Footer />
        </>
    )
}
export default Reservation;