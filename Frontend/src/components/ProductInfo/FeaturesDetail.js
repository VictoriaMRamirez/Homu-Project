import React from 'react';
import { BiWifi } from 'react-icons/bi';
import { RiParkingFill } from 'react-icons/ri';
import { FaTemperatureHigh, FaHotjar } from 'react-icons/fa';
import { GiGymBag } from 'react-icons/gi';
import { CgInfo } from 'react-icons/cg';

function FeaturesDetail(props) {
    return (
        <>
            <h3 className='detailFeatureTitle'>¿Qué ofrece este lugar?</h3>
            <div className='detailFeaturesContainer'>
                {props.features.map((feature, index) => (
                    <ul className='detailFeatureUl' key={index}>
                        {feature.icon == "BiWifi" ?
                            <>
                                <li>
                                    <BiWifi className="iconFeature"/>{feature.description}
                                </li>
                            </>
                            : feature.icon == "RiParkingFill" ?
                                <>
                                    <li>
                                        <RiParkingFill className="iconFeature" />{feature.description}
                                    </li>
                                </>
                                : feature.icon == "FaTemperatureHigh" ?
                                    <>
                                        <li>
                                            <FaTemperatureHigh className="iconFeature" />{feature.description}
                                        </li>
                                    </>
                                    : feature.icon == "FaHotjar" ?
                                        <>
                                            <li>
                                                <FaHotjar className="iconFeature"/>{feature.description}
                                            </li>
                                        </>
                                        : feature.icon == "GiGymBag" ?
                                            <>
                                                <li>
                                                    <GiGymBag className="iconFeature"/>{feature.description}
                                                </li>
                                            </> :
                                            feature.icon == "Buscar icono" ?
                                                <>
                                                    <li>
                                                        <CgInfo className="iconFeature" />{feature.description}
                                                    </li>
                                                </> :
                                                feature.icon == "buscar icono" ?
                                                    <>
                                                        <li>
                                                            <CgInfo className="iconFeature" />{feature.description}
                                                        </li>
                                                    </> :
                                                    <>
                                                        <li>
                                                            <CgInfo className="iconFeature"/>{feature.description}
                                                        </li>
                                                    </>
                        }
                    </ul>
                ))}
            </div>
        </>
    )
}

export default FeaturesDetail;