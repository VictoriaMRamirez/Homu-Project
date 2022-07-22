import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import '../../styles/Components/Header.css';
import "../../styles/Components/Sidebar.css";
import HeaderLogoMotto from './HeaderLogoMotto';


function HeaderRegister() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='header'>
            <section className='header_container'>
                <HeaderLogoMotto />
                <section className="navbar">
                    <Link to="" className='menu-bars'>
                        <p className='hidden'>Icono menú hamburguesa</p>
                        <FaBars onClick={showSidebar} className='icon_menu' />
                    </Link>
                    <Link to="/login">
                        <button className='header_button'>Inicia Sesion</button>
                    </Link>
                </section>
            </section>

            <nav
                className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='' className='menu-bars'>
                        <p className='hidden'>Icono cerrar menú hamburguesa</p>
                            <FaWindowClose className='icon_close' />
                        </Link>
                    </li>
                    <li className="nav-text-menu">
                        <span>MENÚ</span>
                    </li>
                    <li className="nav-text">
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <span>Iniciar Sesión</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}


export default HeaderRegister;