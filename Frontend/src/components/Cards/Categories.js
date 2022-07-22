import React from 'react';
import '../../styles/Components/Categories.css';
import useFetch from '../../hooks/useFetch';
import CardCategory from './CardCategory';

function Categories(props) {
    const { data, isLoaded } = useFetch(`/categories/allCategories`);

    const categoryList = data.map((category) => {
        return (
            <CardCategory
                key={category.id}
                url={category.url}
                title={category.title}
                description={category.description}
            />
        )
    })

    return (
        <>
            <h2 className='categoryP'>Buscar por tipo de alojamiento</h2>
            <div key={props.id} className="categoryItem">
                {isLoaded ? categoryList : <p>Cargando...</p>}
            </div>
        </>
    )
}

export default Categories;
