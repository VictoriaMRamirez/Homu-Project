import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardProduct from '../Cards/CardProduct';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Categories from '../Cards/Categories';
import useFetch from '../../hooks/useFetch';

function FilterCities() {
    const { citiesId } = useParams();
    let cityId = localStorage.getItem('cities');
    const { data, isLoaded } = useFetch(`/products/cities/${cityId}`);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cities/" + localStorage.getItem("cities"));
    }

    const citySelected = data.map((products, index) => {
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
            <section className='productContainer' key={citiesId}>
                <h2 className='productInfoTitle'>Recomendaciones</h2>
                <div className='productCardBox'>
                    {isLoaded ? <div onClick={handleClick} className="productCardBox">{citySelected} </div> : <div>Cargando...</div>}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default FilterCities;