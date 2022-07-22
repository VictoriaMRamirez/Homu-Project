import React, { useState } from 'react';
import { GoChevronLeft } from "react-icons/go";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../../styles/Components/ProductDetails.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import CarrouselProduct from './CarrouselProduct';
import CalendarDetail from './CalendarDetail';
import CalendarDetailResponsive from './CalendarDetailResponsive';
import MapDetail from './MapDetail';
import RulesDetails from './RulesDetails';
import CancelationDetail from './CancelationDetail';
import SafetiesDetail from './SafetiesDetail';
import FeaturesDetail from './FeaturesDetail';
import ShareSocialMedia from './ShareSocialMedia';
import Images from './Images';

function CardDetail(props) {
    const [state, setState] = useState(false);

    const handleClick = () => {
        localStorage.setItem("buttonReservationClick", true);
    }

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    return (
        <div>
            <div className="detailContainer">
                <div className="detailHeaderContainer">
                    <section className="detailHeader">
                        <h2 className='detailCategories'>{props.categories}</h2>
                        <section className="detailSocialMedia">
                            <h3 className='detailTitle'>{props.title}</h3>
                            <ShareSocialMedia 
                                title={props.title}
                            />
                        </section>
                    </section>
                    <Link to="/">
                        <p className='hidden'>Volver</p>
                        <section className='detailIconContainer'>
                            <GoChevronLeft className='detailIcon' />
                        </section>
                    </Link>
                </div>
            </div>

            <div className="detailCityContent">
                <section className='detailCity'>
                    <h3 className='detailCityTitle'> <FaMapMarkerAlt className='detailIconMap' />{props.cities}</h3>
                    <section className='detailOpinion'>
                        <span className="detailRating">{
                            Array(props.rating)
                                .fill()
                                .map((_, index) => (
                                    <p key={index} className="detailStars"><AiFillStar /></p>
                                ))
                        }</span>
                        <p className='detailReview'>{props.review}</p>
                    </section>
                </section>

            </div>

            <section className='detailCarrouselContainer'>
                <CarrouselProduct className='detailCarrousel'
                    url={props.url}
                />
            </section>
            <section>
                <Images
                    key={props.id}
                    url={props.url}
                    title={props.title}
                    id={props.id}
                />
            </section>
            <section className='detailDescription'>
                <h4 className='detailDescriptionSlogan'>{props.title}</h4>

                {state ? <>
                    <h4 className='detailDescriptionInfo'>{props.description} <span onClick={toggleBtn}>...continuar leyendo</span></h4>
                </> :
                    <>
                        <h4 className='detailDescriptionInfo'>{props.long_description}<span onClick={toggleBtn}> ...leer menos</span></h4>
                    </>}
            </section>
            <section className='detailFeatures'>
                <FeaturesDetail features={props.features} />
            </section>

            <div className='detailCalendar'>
                <h4 className='detailCalendarTitle'>Fechas disponibles</h4>
                <section className="detailCalendarFlex">
                    <CalendarDetail className="detailCalendarDisplay" />
                </section>
                <div className="detailCalendarFlexDesktop">
                    <section className="detailCalendarDouble">
                        <CalendarDetailResponsive className="detailCalendarDisplayDos" />
                    </section>
                    <div className="detailCalendarReservationContainer">
                        <section className='detailCalendarReservationFlex'>
                            <p className="detailInfoReservation">Agrega tus fechas de viajes para obtener precios exactos</p>
                            <section className='detailButtonReservationDiv'>
                                {localStorage.getItem("username") == null ?
                                    <Link to="/login">
                                        <button className="detailButtonReservation" onClick={handleClick}> Iniciar reserva</button>
                                    </Link> :
                                    <Link to={"/product/" + props.title + "/reservation"}>
                                        <button className="detailButtonReservation"> Iniciar reserva</button>
                                    </Link>
                                }
                            </section>
                        </section>
                    </div>
                </div>
            </div>

            <section className='detailMap'>
                <MapDetail cities={props.cities}
                    map_url={props.map_url} />
            </section>

            <div className='detailRules'>
                <div className="rulesDetailsContainer">
                    <h4 className="rulesDetailTitle">¿Qué tenes que saber?</h4>
                    <div className='rulesDetailContainerFlex'>
                        <section className='rulesDetailFlex'>
                            <div className="rulesDetailOne">
                                <RulesDetails
                                    rules={props.rules}
                                />
                            </div>
                            <div className="rulesDetailList">
                                <SafetiesDetail
                                    safeties={props.safeties}
                                />
                            </div>
                        </section>

                        <section className='rulesDetailThree'>
                            <CancelationDetail
                                cancellations={props.cancellations}
                            />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;