import React from 'react';
import { Slide } from 'react-slideshow-image';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import "react-slideshow-image/dist/styles.css";
import "../../styles/Accesories/Carrousel.css"

function CarrouselProduct(props) {
    const { data, isLoaded } = useFetch(`/images/allImages`);

    const { productId } = useParams();

    return (
        <>
            <Slide autoplay transitionDuration={500}>
                {data.map((image, index) =>
                    image.products.title == productId ? (
                        (
                            <div key={index} className="each-slide-effect">
                                <div
                                    style={{ backgroundImage: `url(${image.url})` }}>
                                </div>
                            </div>
                        ))
                        :
                null)}
            </Slide>
        </>
    )
}

export default CarrouselProduct;