import React from 'react';
import { BsFileEarmarkRuled } from 'react-icons/bs';

function CancelationDetail(props) {
    return (
        <>
            <h3 className='detailFeatureTitle'><BsFileEarmarkRuled className='rulesIcon' />Políticas de cancelación</h3>
            <ul className='detailFeatureUl' key={props.id}>
                <section className='detailFeaturesContainer'>
                    {props.cancellations.map((cancellation, index) => (
                        <li>{cancellation.icon} {cancellation.description}</li>
                    ))}
                </section>
            </ul>
        </>
    )
}

export default CancelationDetail;