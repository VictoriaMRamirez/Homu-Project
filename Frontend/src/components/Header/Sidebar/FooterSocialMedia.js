import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

function FooterSocialMedia() {
    return (
        <>
            <a href='http://www.facebook.com/' rel="noopener noreferrer" target="_blank" className='iconFooter'><p className='hidden'>Icono Facebook</p><FaFacebook /></a>
            <a href='http://www.linkedin.com/' rel="noopener noreferrer" target="_blank" className='iconFooter'><p className='hidden'>Icono Linkedin</p><FaLinkedin /></a>
            <a href='https://www.instagram.com/homuproyect/' rel="noopener noreferrer" target="_blank" className='iconFooter'><p className='hidden'>Icono Instagram</p><FaInstagramSquare /></a>
            <a href='http://www.twitter.com/' rel="noopener noreferrer" target="_blank" className='iconFooter'><p className='hidden'>Icono Twitter</p><FaTwitterSquare /></a>
        </>
    )
}

export default FooterSocialMedia;