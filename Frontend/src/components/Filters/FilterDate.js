import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardProduct from '../Cards/CardProduct';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Categories from '../Cards/Categories';
import useFetch from '../../hooks/useFetch';

function FilterDate() {
    let datePicker = localStorage.getItem('datePicker').substring(1, 11);
    let datePicker2 = localStorage.getItem('datePicker2').substring(1, 11);

    const { data, isLoaded } = useFetch(`/products/productsAvailable/byDate/${datePicker}/${datePicker2}/`);

    const productOnDateSelected = data.map((products, index) => {
        return (
            <CardProduct
                key={index}
                id={products.categories.id}
                url={products.url}
                rating={products.rating}
                review={products.review}
                location={products.location}
                watch={products.watch}
                title={products.title}
                description={products.description}
                cities={products.cities.name}
            />
        )
    });

    return (
        <>
            <Header />
            <Navbar />
            <div className="categories_body">
                <Categories />
            </div>

            <section className='productContainer'>
                <h2 className='productInfoTitle'>Recomendaciones</h2>
                <div className='productCardBox'>
                    {isLoaded ? productOnDateSelected : <div>Cargando...</div>}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default FilterDate;