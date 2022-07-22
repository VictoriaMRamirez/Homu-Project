import React from 'react';
import {BsFileEarmarkRuled} from "react-icons/bs"
import "../../styles/Accesories/RulesDetails.css";

function RulesDetails(props) {
    return (
        <>
            <h3 className='detailFeatureTitle'><BsFileEarmarkRuled className='rulesIcon' />Normas de la casa</h3>
            <div className='detailFeaturesContainer'>
                <ul className='detailFeatureUl' key={props.id}>
                    {props.rules.map((rule, index) => (
                        <li>{rule.icon} {rule.description}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RulesDetails;