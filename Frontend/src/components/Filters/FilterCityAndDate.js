import React from 'react';
import useFetch from '../../hooks/useFetch';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "../../styles/Components/Navbar.css";
import '../../styles/Accesories/DatePickerLibrary.css';
import '../../styles/General/Buttons.css';
import 'rsuite/dist/rsuite.min.css';
import CardProduct from '../Cards/CardProduct';
import Categories from '../Cards/Categories';

function FilterCityAndDate() {
    let datePicker = localStorage.getItem('datePicker').substring(1, 11);
    let datePicker2 = localStorage.getItem('datePicker2').substring(1, 11);
    let cityId = localStorage.getItem('cities');

    const { data, isLoaded } = useFetch(`/products/productsAvailable/${datePicker}/${datePicker2}/${cityId}`);

    const cityAndDateSelected = data.map((products, index) => {
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
        <div className='filterCategoryContainer'>
            <Header />
            <Navbar />
            <div className="categories_body">
                <Categories />
            </div>
            <section className='productContainer'>
                <h2 className='productInfoTitle'>Recomendaciones</h2>

                <div className='productCardBox'>
                    {isLoaded ? cityAndDateSelected : <div>Cargando...</div>}
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default FilterCityAndDate;