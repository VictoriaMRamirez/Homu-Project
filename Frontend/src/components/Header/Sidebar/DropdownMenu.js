import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
import useFetchAuth from '../../../hooks/useFetchAuth';
import { BiDownArrow } from 'react-icons/bi';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "../../../styles/Accesories/DropdownMenu.css";

export default function DropdownMenu() {
    const { data, isLoaded } = useFetchAuth(`/users/findUser/${localStorage.getItem("userId")}`);

    const closeSesion = () => {
        localStorage.clear();
    }

    const avatarUser = data.avatar;

    return (
        <Menu menuButton={
            <MenuButton>
                        <div className="avatarUserContainer">
                            <img src={avatarUser} alt="Imagen de perfíl gravatar" className='avatarGravatar' />
                            <BiDownArrow className='iconDropdown' />
                        </div>
            </MenuButton>
        } transition>

            {localStorage.getItem("username") === "administrador@homu.com" ?
                <>
                    <Link to="/product/addProduct">
                        <MenuItem>Generar Producto</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem onClick={() => { closeSesion(); window.location.reload(); }}>Cerrar sesión</MenuItem>
                    </Link>
                </>
                :
                <>
                    <Link to="/myBookings">
                        <MenuItem>Mis reservas</MenuItem>
                    </Link>
                    <Link to="/myFavorites">
                        <MenuItem>Mis favoritos</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem onClick={() => { closeSesion(); window.location.reload(); }}>Cerrar sesión</MenuItem>
                    </Link>
                </>
            }
        </Menu>
    );
}
