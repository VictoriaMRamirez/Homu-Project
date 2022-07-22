import React, { useState } from 'react'
import ImageGaleryDetail from './ImageGaleryDetail';
import useFetch from '../../hooks/useFetch';
import "../../styles/Accesories/ImageGaleryDetail.css";
import { useParams } from 'react-router-dom';
import FrontImage from './FrontImage';


function Images() {
    const { data, isLoaded } = useFetch(`/images/allImages`);
    const { productId } = useParams();

    const imagesList = data.map((img) => {
        if (img.products.title == productId) {
            return (
                <ImageGaleryDetail
                    key={img.id}
                    url={img.url}
                    title={img.title}
                    id={img.id}
                />
            )
        }
    })

    return (
        <div className='imagesFlex'>
            <FrontImage />
            <div className='imagesContainerGrid'>
                {isLoaded ? imagesList : <p>Cargando...</p>}
            </div>
        </div>
    )
}

export default Images;