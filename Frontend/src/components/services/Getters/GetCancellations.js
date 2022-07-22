import React from 'react'
import useFetch from '../../../hooks/useFetch';

function GetCancellations() {
    const { data, isLoaded } = useFetch(`/cancellations/allCancellations`);
    let key = 0;

    const cancellationsList =
        data.map((cancellations, index) => {
            return (
                <option value={cancellations.id} key={index}>{cancellations.description}</option>
            )
        })

    const ids = data.map(id => {
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;

    function handleChange(event) {
        localStorage.setItem('cancellationId', event.target.value);
    }

    return (
        <>
            <label>Selecciona las políticas de cancelación</label>
            <select id="Politicas de cancelación" key={key++} className='selectCreateProduct form_select' onChange={handleChange}>
                {cancellationsList}
                {localStorage.setItem("maxIdCancellation", maxIdPlus)}
            </select>
        </>
    )
}

export default GetCancellations;