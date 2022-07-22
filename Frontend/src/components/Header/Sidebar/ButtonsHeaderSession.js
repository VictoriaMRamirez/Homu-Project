import React from 'react';
import DropdownMenu from './DropdownMenu';
import {BiDownArrow} from "react-icons/bi";

function ButtonsHeaderSession() {
    return (
        <div className="buttonHeaderContainer">
            <section className="userOptions">
                <p className='nameUser'> Hola, <span>{localStorage.getItem("username")}</span> </p>
            </section>

            <section className='navTextUser'>
                <DropdownMenu />
            </section>
        </div>
    )
}

export default ButtonsHeaderSession;