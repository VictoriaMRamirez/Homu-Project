import React from 'react';
import ButtonsHeader from './ButtonsHeader';
import ButtonsHeaderSession from './ButtonsHeaderSession';
import ButtonsSidebar from './ButtonsSidebar';
import ButtonSidebarSession from './ButtonSidebarSession';
import FooterSocialMedia from './FooterSocialMedia';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import useFetchAuth from '../../../hooks/useFetchAuth';
import '../../../styles/Components/Header.css';
import "../../../styles/Components/Sidebar.css";

function Sidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const { data, isLoaded } = useFetchAuth(`/users/findUser/${localStorage.getItem("userId")}`);
    const avatarUser = data.avatar;

    return (
        <div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='/' className='menu-bars'>
                            <FaWindowClose className='icon_close' />
                        </Link>
                       
                            <img src={avatarUser} alt="Imagen de perfíl gravatar" className='avatarGravatar' />
                      
                    </li>

                    <li className="nav-text-menu">
                        {localStorage.getItem("username") ?
                            <div className='navTextUser'>
                                <p className='nameUser'> Hola, <span>{localStorage.getItem("username")}</span> </p>
                            </div> : <span>MENÚ</span>}
                    </li>
                    {props.buttonLogin !== localStorage.getItem("username") ? (<ButtonsSidebar />) : (<ButtonSidebarSession />)}
                </ul>
                <div className={sidebar ? 'menu_footer active' : 'menu_footer'}>
                    <FooterSocialMedia />
                </div>
            </nav>

            <div className="navbar">
                <Link to="" className='menu-bars'>
                    <p className='hidden'>Icono cerrar menú hamburguesa</p>
                    <FaBars onClick={showSidebar} className='icon_menu' />
                </Link>
                {props.buttonLogin !== localStorage.getItem("username") ? (<ButtonsHeader />) : (
                    <div className='session_container'>
                        <ButtonsHeaderSession />
                    </div>
                )}
            </div>
        </div >
    )
}

export default Sidebar;