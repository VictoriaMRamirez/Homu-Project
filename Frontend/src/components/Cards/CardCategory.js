import React from 'react';
import '../../styles/Components/Categories.css';
import { Link } from 'react-router-dom';

function CardCategory(props) {
    return (
        <section className='cardCategory' key={props.id}>
            <Link to={"/category/" + props.title}>
                <p className='hidden'>Imagen de la categoría</p>
                <img className='categoryImg' src={props.url} alt={"Portada de la sección categorías de" + props.title} />
            </Link>
            <div className="categoryInfo">
                <h2 className='categoryTitle'>{props.title}</h2>
                <h3 className='categoryDescription'>{props.description}</h3>
            </div>
        </section>
    )
}

export default CardCategory;