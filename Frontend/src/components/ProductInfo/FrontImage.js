import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import GetImage from './GetImage';

function FrontImage() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const { productId } = useParams();

    const productList = data.map((product) => {
        if (product.title == productId) {
            return (
                <GetImage
                    url={product.url}
                    title={product.title}
                    key={product.id}
                />
            )
        }
    });

    return (
        isLoaded ? productList : <p>Cargando...</p>
    )
}

export default FrontImage