import React from 'react';
import { BsFileEarmarkRuled } from 'react-icons/bs';
import useFetch from '../../hooks/useFetch';

function SafetiesDetail(props) {
    
    return (
        <>
            <h3 className='detailFeatureTitle'><BsFileEarmarkRuled className='rulesIcon' />Salud y seguridad</h3>
            <div className='detailFeaturesContainer'>
            <ul className='detailFeatureUl' key={props.id}>
                {props.safeties.map((safetie, index) => (
                        <li>{safetie.description}</li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default SafetiesDetail