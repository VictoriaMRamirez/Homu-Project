import React from 'react';
import useFetch from '../../../hooks/useFetch';

function GetFeatures(props) {
    const { data, isLoaded } = useFetch(`/features/allFeatures`);

    const featuresList =
        data.map((feature, index) => {
            return (
                <option value={feature.id} key={index}>{feature.description}</option>
            )
        })

    const ids = data.map(id => {
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;

    function handleChange(event) {
        localStorage.setItem('featureId', event.target.value);
    }

    return (
        <>
            <label className="inputTitleProdGenerator">Características</label>
            <select id="Features" name="features" className='selectCreateProduct form_select' onChange={handleChange}>
                <option hidden >Selecciona la característica</option>
                <option disabled >Selecciona la característica</option>
                {featuresList}
                {localStorage.setItem('maxIdFeatures', maxIdPlus)}
            </select>
        </>
    )
}

export default GetFeatures;