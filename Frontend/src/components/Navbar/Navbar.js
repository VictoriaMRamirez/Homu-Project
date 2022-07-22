import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DateRangePicker from 'rsuite/DateRangePicker';
import "../../styles/Components/Navbar.css";
import '../../styles/Accesories/DatePickerLibrary.css';
import '../../styles/General/Buttons.css';
import 'rsuite/dist/rsuite.min.css';
import CardCities from '../Cards/CardCities';

function Navbar(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products/dateFilter");
    }
    return (
        <div className='navbarContainer'>

            <h1 className="title">Buscar ofertas en hoteles, casas y mucho más</h1>

            <section className='navbarElementsContainer'>
                <CardCities key={props.id} />
                <DateRangePicker placeholder="Seleccione el rango de fechas" className='datePickerDesktop' format='dd-MM-yyyy'

                    onChange={(date) => {
                        localStorage.setItem('datePicker', JSON.stringify((date[0])));
                        localStorage.setItem('datePicker2', JSON.stringify((date[1])));

                        handleClick();
                    }} />
                <DateRangePicker placeholder="Seleccione el rango de fechas" oneTap showOneCalendar hoverRange="week" format='dd-MM-yyyy' className='datePickerMobile'
                    
                    onChange={(date) => {
                        localStorage.setItem('datePicker', JSON.stringify((date[0])));
                        localStorage.setItem('datePicker2', JSON.stringify((date[1])));

                        handleClick();
                    }}
                />
                <section className="navbarButtonContainer">
                    <Link to={"/products/cityAndDate"}>
                        <button className='navbarButton' onClick={handleClick}>Buscar</button>
                    </Link>
                </section>

            </section>

        </div>
    )
}
export default Navbar;