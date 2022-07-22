import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function CardCities() {
    const { data, isLoaded } = useFetch(`/cities/allCities`);
    let [city, setCity] = useState("");
    const navigate = useNavigate();

    const citiesList =
        data.map((city, index) => {
            return (
                <option value={city.id} key={city.id}>{city.name}, {city.country} </option>
            )
        })

    function handleChange(event) {
        localStorage.setItem('cities', event.target.value);
        localStorage.setItem('cityId', city);
    }

    function onChange(e) {
        setCity(e.target.value);
        navigate("/cities/" + localStorage.getItem("cities"));
    }

    return (
            <form className='formInputSelect' onChange={handleChange}>
            <label className='hidden'>Selecciona el destino</label>
                <select id="city" name="city" className='form_select' value={city} onChange={onChange}>
                    <option className="form_option" hidden >Selecciona el destino</option>
                    <option className="form_option" disabled >Selecciona el destino</option>
                    {citiesList}
                </select>
            </form>
    )
}

export default CardCities;