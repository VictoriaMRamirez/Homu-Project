import React from 'react';
import { Link } from 'react-router-dom';
import { BiConfused } from 'react-icons/bi';

function MyBookingsEmpty() {
    return (
        <>
            <BiConfused className='iconConfused'/>
            <h1 className='bookingEmptyMessage'>Ups, no hay nada que ver aquí</h1>
            <Link to="/">
                <button className='textButton'>Volver al inicio</button>
            </Link>
        </>
    )
}

export default MyBookingsEmpty;