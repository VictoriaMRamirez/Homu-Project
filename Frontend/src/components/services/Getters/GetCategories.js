import React from 'react';
import useFetch from '../../../hooks/useFetch';

function GetCategories(props) {
    const { data, isLoaded } = useFetch(`/categories/allCategories`);

    const categoryList =
        data.map((category, index) => {
            return (
                <option value={category.id} key={index}>{category.title}</option>
            )
        })

    function handleChange(event) {
        localStorage.setItem('categoryId', event.target.value);
    }

    return (
        <>
            <legend className="inputTitleProdGenerator">Categoría</legend>
            <select id="category" name="category" className='selectCreateProduct form_select' onChange={handleChange}>
                <option hidden >Selecciona la categoría</option>
                <option disabled >Selecciona la categoría</option>
                {categoryList}
            </select>
        </>
    )
}

export default GetCategories;