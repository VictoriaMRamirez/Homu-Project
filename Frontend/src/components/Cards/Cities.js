import React from 'react';
import useFetch from '../../hooks/useFetch';
import CardCities from './CardCities';

function Cities() {
    const { data, isLoaded } = useFetch(`/cities/allCities`);

    const cityList = data.map((city, index) => {
        return (
            <CardCities
                key={index}
                name={city.name}
                country={city.country}
                id={city.id}
            />
        )
    })

    return (
        isLoaded ? cityList : <option>Cargando...</option>
    )
}

export default Cities;