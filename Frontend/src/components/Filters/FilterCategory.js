import React from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../Cards/CardProduct';
import useFetch from '../../hooks/useFetch';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Categories from '../Cards/Categories';
import "../../styles/Components/Product.css";

function FilterCategory() {
    const { categoryId } = useParams();
    const { data, isLoaded } = useFetch(`/products/categories/${categoryId}`);

    const categorySelected = data.map((products, index) => {
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
            />
        )
    })

    return (
        <>
            <Header />
            <Navbar />
            <div className="categories_body">
                <Categories />
            </div>
            <section className='productContainer' key={categoryId}>
                <h2 className='productInfoTitle'>Recomendaciones</h2>
                <div className='productCardBox'>
                    {isLoaded ? categorySelected : <div>Cargando...</div>}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FilterCategory;