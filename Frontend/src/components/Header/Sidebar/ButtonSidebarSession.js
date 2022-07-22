import React from 'react';
import { Link } from "react-router-dom";
import useUser from '../../../hooks/useUser';

function ButtonSidebarSession() {
    const { logOut } = useUser();

    const icon_close = () => {
        logOut();
        localStorage.clear();
    }

    return (
        <ul className="navTextUser">
            {
                localStorage.getItem("username") === "administrador@homu.com" ?
                    <li className="nav-text">
                        <Link to="/product/addProduct">
                            <button> Generar producto </button>
                        </Link>
                    </li> :
                    <>
                        <li className="nav-text">
                            <Link to="/myBookings">
                                <button>Mis reservas</button>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/myFavorites">
                                <button>Mis favoritos</button>
                            </Link>
                        </li>
                    </>
            }
            <p className='closeSesion'> ¿Deseas <span className='spanCloseSesion' onClick={() => { icon_close(); window.location.reload(); }}>cerrar Sesión</span>? </p>
        </ul>
    )
}

export default ButtonSidebarSession