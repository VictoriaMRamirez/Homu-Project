import React, { useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai"
import '../../styles/Components/Product.css';


function MyFavoriteCard(props) {
    const handleDelete = () => {
        props.onDelete(props.id2)
    }

    return (
        <>
            <div className="productInfoContainer" key={props.id}>

                <button onClick={() => { handleDelete(); }} id="favIcon">
                    <span role="img" aria-label="❤">❤</span>
                </button>

                <div className='productImageContainer'>
                    <img src={props.url} alt={props.title} />
                </div>
                <div className='flex_deskt'>
                    <div className='productRatingContainer'>
                        <span className="productRatingFlex"><p className='productRating'> {props.categories} </p>{
                            Array(props.rating)
                                .fill()
                                .map((_, index) => (
                                    <p key={index}><AiFillStar /></p>
                                ))
                        }</span>
                        <p className="productReview">{props.review}</p>
                    </div>
                    <div className='productTitle'>
                        <p>{props.title}</p>
                    </div>
                    <div className='productMap'>
                        <p><FaMapMarkerAlt className='productIconMap' /> {props.location}</p>
                        <span><a href={props.watch} target="_blank" rel="noreferrer">Ver en mapa</a></span>
                    </div>
                    <div className='productDescription'>
                        <p>{props.description}<span className='productMoreInfo'>...continuar leyendo</span></p>
                    </div>
                    <Link to={"/product/" + props.title}>
                        <div className='productButton'>
                            <button>Ver más</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MyFavoriteCard