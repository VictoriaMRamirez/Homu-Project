import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaShareAltSquare } from 'react-icons/fa';
import "../../styles/Accesories/ShareSocialMedia.css";
import { useParams } from 'react-router-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

function ShareSocialMedia(props) {
    const { productId } = useParams();

    const shareUrl = `http://homu.online/`

    return (
        <Menu menuButton={<MenuButton className='buttonShareSocialMedia' type="button">
            <p className="hidden">Dropdown compartir en redes sociales</p> <FaShareAltSquare className='iconShareSocialMedia' />
        </MenuButton>} transition>
            <MenuItem className='menuItemSocialMedia'>
                <FacebookShareButton url={shareUrl} title="Encontrá los mejores bookings" type="button">
                    Compartir en <BsFacebook className="iconShare" />
                </FacebookShareButton>
            </MenuItem>
            <MenuItem className='menuItemSocialMedia'>
                <TwitterShareButton url={shareUrl} title="Encontrá los mejores bookings" type="button">
                    Compartir en <BsTwitter className="iconShare" />
                </TwitterShareButton>
            </MenuItem>
            <MenuItem className='menuItemSocialMedia'>
                <WhatsappShareButton url={shareUrl} title="Encontrá los mejores bookings" type="button">
                    Compartir en <BsWhatsapp className="iconShare" />
                </WhatsappShareButton>
            </MenuItem>
            <MenuItem className='menuItemSocialMedia'>
                <LinkedinShareButton url={shareUrl} title="Encontrá los mejores bookings" type="butto<n">
                    Compartir en <BsLinkedin className="iconShare" />
                </LinkedinShareButton>
            </MenuItem>
        </Menu>

    )
}

export default ShareSocialMedia;