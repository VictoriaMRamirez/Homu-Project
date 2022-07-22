import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import "../../styles/Accesories/MapDetail.css";

function MapDetail(props) {
    return (
        <div className="mapDetailContainer">
            <h3 className='detailCalendarTitle'>¿Dónde vas a estar?</h3>
            <h4 className='mapDetailCity'><FaMapMarkedAlt className='mapDetailIcon' />{props.cities}</h4>
            <iframe className='Map' width="600" height="500" id="gmap_canvas" title="Mapa" src={props.map_url} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
    )
}

export default MapDetail;