import React from 'react';
import { Link } from 'react-router-dom';
import { BiConfused } from 'react-icons/bi';

function MyFavouritesEmpty() {
    return (
        <>
            <BiConfused className='iconConfused'/>
            <p className='bookingEmptyMessage'>Aún no tienes favoritos</p>
            <Link to="/">
                <button className='textButton'>Volver al inicio</button>
            </Link>
        </>
    )
}

export default MyFavouritesEmpty;