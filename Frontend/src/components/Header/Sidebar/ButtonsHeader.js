import React from 'react';
import { Link } from 'react-router-dom';

function ButtonsHeader() {
    return (
        <>
            <Link to="/login">
                <button className='header_button'>
                    Iniciar Sesion
                </button>
            </Link>
            <Link to="/register">
                <button className='header_button'>
                    Crear Cuenta
                </button>
            </Link>
        </>
    )
}

export default ButtonsHeader;