import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import FooterSocialMedia from '../Header/Sidebar/FooterSocialMedia';
import '../../styles/Components/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <section className='footer_info'>
                <span><FaRegCopyright className='iconCopy' /></span>
                <span>2022</span>
                <span>HOMU</span>
            </section>

            <section className='footer_menu'>
                <FooterSocialMedia />
            </section>
        </div>
    )
}

export default Footer;