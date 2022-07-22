import React from 'react';
import useFetch from '../../hooks/useFetch';
import CardProduct from './CardProduct';
import '../../styles/Components/Product.css';

function Cards() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const productList = data.map((product) => {
        return (
            <CardProduct
                key={product.id}
                id={product.id}
                url={product.url}
                rating={product.rating}
                review={product.review}
                location={product.location}
                map_url={product.map_url}
                watch={product.watch}
                title={product.title}
                description={product.description}
                categories={product.categories.title}
                long_description={product.long_description}
            />
        )
    });

    return (
        <section className='productContainer'>
            <h2 className='productInfoTitle'>Recomendaciones</h2>
                <section className='productCardBox' key={productList.length++}>
                    {isLoaded ? productList : <p>Cargando...</p>}
                </section>
        </section>
    )
}

export default Cards;