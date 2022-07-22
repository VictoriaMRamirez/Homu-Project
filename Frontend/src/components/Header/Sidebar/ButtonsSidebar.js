import React from 'react';
import { Link } from 'react-router-dom';

function ButtonsSidebar() {
    return (
        <ul className="navTextUser">
            <Link to="/login">
                <li className="nav-text">
                    <button>Iniciar Sesión</button>
                </li>
            </Link>

            <Link to="/register">
                <li className="nav-text">
                    <button>Crear cuenta</button>
                </li>
            </Link>
        </ul>
    )
}

export default ButtonsSidebar;