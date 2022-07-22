import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { AiOutlineCheckCircle, AiFillStar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "../../styles/Accesories/CalendarDetail.css";
import useReservation from "../../hooks/useReservation";
import TimePicker from 'react-time-picker';
import emailjs from '@emailjs/browser';
import useFetchAuth from "../../hooks/useFetchAuth";
import { isWithinInterval } from "date-fns";
import Alert from 'react-popup-alert';
import "../../styles/Accesories/React-Time-Picker.css";

function CardReservation(props) {
  const [date, setDate] = useState("");
  const [vaccinated, setVaccinated] = useState(false);
  const [seller_info, setSellerInfo] = useState("");
  const [start_time, setStartTime] = useState(null);
  const [start_date, setStartDate] = useState(null);
  const [finish_date, setFinishDate] = useState(null);
  const [products, setProducts] = useState(localStorage.getItem('idProduct'));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("name"));
  const [surname, setSurname] = useState(localStorage.getItem("surname"));
  const [city, setCity] = useState(localStorage.getItem("cityUser"));
  const [email, setEmail] = useState(localStorage.getItem("username"));
  const { Reservation } = useReservation();
  const checkIn = window.localStorage.getItem("date");
  const checkOut = window.localStorage.getItem("date2");

  /*POP UP ALERT*/
  const [alert, setAlert] = useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })
  function onCloseAlert() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }

  function onShowAlert(type) {
    setAlert({
      type: type,
      text: 'La reserva no fue creada, intentelo nuevamente',
      show: true
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                               //CALENDARIO                                 */
  /* -------------------------------------------------------------------------- */

  const productId = localStorage.getItem("idProduct");
  const { data } = useFetchAuth(`/bookings/findBookingByProduct/${productId}`);
  const [dates, setDates] = useState()

  const bookingsDates = data.map((bookings, index) => {
    return (
      [new Date(bookings.start_date),
      new Date(bookings.finish_date)]
    )
  });

  function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }

  function isWithinRanges(date, ranges) {
    return ranges.some(range => isWithinRange(date, range));
  }

  function tileDisabled({ date, view }) {
    if (view === 'month') {
      return isWithinRanges(date, bookingsDates);
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                               fin calendario                               */
  /* -------------------------------------------------------------------------- */

  const sendEmail = (e) => {
    emailjs.sendForm('homuProyect', 'template_varskqr', "#formReservation", 'SLkHg1L_8kzpGb-yt')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleReservation = (e) => {
    e.preventDefault();
    if (start_date !== null && finish_date !== null && start_time !== null) {
      Reservation({
        seller_info,
        vaccinated,
        start_time,
        start_date,
        finish_date,
        products: {
          id: products
        },
        users: {
          id: userId
        }
      });

      navigate("/reservation/success");
      sendEmail();
      removeDates();
      localStorage.removeItem("date");
      localStorage.removeItem("date2");
    } else if (start_date === null || finish_date === null) {
      onShowAlert("Por favor, seleccione una fecha");
    } else if (start_time === null) {
      onShowAlert("Por favor, seleccione un horario");
    } else if (start_time === null && start_date === null && finish_date === null) {
      onShowAlert("Por favor, ingrese los datos requeridos")
    }
  }

  const clickCalendar = (e) => {
    setStartDate(dates[0])
    setFinishDate(dates[1])
    setDate(prevState => !prevState);
    console.log(checkIn, checkOut);
    e.preventDefault();
  }

  const removeDates = (e) => {
    localStorage.removeItem("date");
    localStorage.removeItem("date2");
    setDate(prevState => !prevState);
    e.preventDefault();
  }

  function handleChangeCheckbox(e) {
    setVaccinated(prevState => !prevState);
    console.log(vaccinated);
  }

  return (
    <div className="reservationPage">
      <div className="reservationContainer">
        <div className="detailHeaderContainer">
          <div className="detailHeader">
            <p className="detailCategories">{props.categories}</p>
            <strong className="detailTitle">{props.title}</strong>
          </div>
          <Link to="/">
            <div className="detailIconContainer">
              <p className='hidden'>Volver atrás</p>
              <GoChevronLeft className="detailIcon" />
            </div>
          </Link>
        </div>
      </div>
      <div className="reservationContainerAllFlex">
        <div className="reservationContainerFlex">
        <h2 className="reservationCardTitleForm">Tus datos</h2>
          <form className="reservationForm" id="formReservation">
            <fieldset>
              <legend className="reservationTitle">Tus datos</legend>

              <div className="reservationNameLastName">
                <section className="reservationInput">
                  <label className="reservationInputTitle" for="Name">Nombre</label>
                  <input
                    value={name}
                    readOnly
                    type="text"
                    placeholder="Ingrese su nombre"
                    className="inputRes"
                    id="Name"
                  />
                </section>
                <section className="reservationInput">
                  <label className="reservationInputTitle" for="Surname">Apellido</label>
                  <input
                    value={surname}
                    readOnly
                    name="text"
                    placeholder="Ingrese su apellido"
                    className="inputRes"
                    id="Surname"
                  />
                </section>
              </div>

              <div className="reservationDataEmailCity">
                <section className="reservationInput">
                  <label className="reservationInputTitle" for="email">Correo electrónico</label>
                  <input
                    value={email}
                    readOnly
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    className="inputRes"
                    name="email"
                    id="email"
                  />
                </section>
                <section className="reservationInput">
                  <label className="reservationInputTitle" for="CityName">Ciudad</label>
                  <input
                    value={city}
                    readOnly
                    type="city"
                    placeholder="Ingrese su ciudad"
                    className="inputRes"
                    id="CityName"
                  />
                </section>
              </div>

              <div className="reservationDataOptional">
                <section className="reservationInput">
                  <label className="reservationInputTitle" for="DataExtra">Datos extra para el vendedor</label>
                  <input
                    value={seller_info}
                    onChange={e => setSellerInfo(e.target.value)}
                    type="text"
                    placeholder="Escriba aquí"
                    className="inputRes"
                    id="DataExtra"
                  />
                </section>
                <section className="reservationInputCheckbox">
                  <label className="reservationInputTitle" for="CheckboxCovid">¿Poseé vacunación contra COVID-19?</label>
                  <input
                    value={vaccinated}
                    onChange={handleChangeCheckbox}
                    type="checkbox"
                    placeholder="Ingrese su correo electrónico"
                    className="inputResCheckbox"
                    id="CheckboxCovid"
                  />
                </section>
              </div>

            </fieldset>
          </form>

          <div className="reservationCalendar">
            <h4 className="reservationTitleCalendar">
              Seleccioná tu fecha de reserva
            </h4>
            <div className="reservationCalendarOne">
              <Calendar
                selectRange={true}
                minDate={new Date()}
                maxDate={new Date(2023, 11, 16)}
                tileDisabled={tileDisabled}
                onChange={(date) => {
                  setDates(date)
                  localStorage.setItem('date', JSON.stringify((date[0])).substring(1, 11));
                  localStorage.setItem('date2', JSON.stringify((date[1])).substring(1, 11));
                }}
              />
              <div className="reservationCalendarButton">
                <button className='buttonDay' onClick={clickCalendar} >Seleccionar fecha</button>
                <button className='buttonDay' onClick={removeDates}>Remover fecha</button>
              </div>
            </div>
            <div className="reservationCalendarComponentDouble">
              <Calendar
                showDoubleView={true}
                selectRange={true}
                minDate={new Date()}
                maxDate={new Date(2023, 11, 16)}
                tileDisabled={tileDisabled}
                onChange={(date) => {
                  setDates(date)
                  localStorage.setItem('date', JSON.stringify((date[0])).substring(1, 11));
                  localStorage.setItem('date2', JSON.stringify((date[1])).substring(1, 11));
                }}
              />
              <div className="reservationCalendarButton">
                <button className='buttonDay' onClick={clickCalendar} >Seleccionar fecha</button>
                <button className='buttonDay' onClick={removeDates}>Remover fecha</button>
              </div>
            </div>
          </div>
          <div className="reservationCheckHour">
            <h4 className="reservationCheckHourTitle">Tu horario de llegada</h4>
            <div className="reservationCheckHourBox">
              <div className="reservationCheckInfo">
                <AiOutlineCheckCircle className="reservationIconCheck" />
                <p className="reservationCheckInfo">
                  {" "}
                  Tu habitación va a estar lista para el check-in entre las
                  10 y las 11 PM
                </p>
              </div>
              <p className="reservationCheckEstimated">
                Indicá tu horario estimado de llegada
              </p>
              <div className="ReservationDropdownHour">
                <TimePicker onChange={setStartTime} value={start_time} />
              </div>
            </div>
          </div>
        </div>
        <div className="reservationCardReservation">
          <h2 className="reservationCardTitle">Detalle de la reserva</h2>
          <div className="reservationCardHotel">
            <div className="reservationCardInfo">
              <div className="reservationCardImage">

                <img
                  src={props.images}
                  alt={props.title}
                  className="reservationCardImage"
                />

              </div>
              <div className="reservationCardInfoFlex">
                <p className="reservationCardCategory">{props.categories}</p>
                <p className="reservationCardName">{props.title}</p>
                <span className="reservationRating">
                  {Array(props.rating)
                    .fill()
                    .map((_, index) => (
                      <p key={index} className="reservationStars">
                        <AiFillStar />
                      </p>
                    ))}
                </span>
                <p className="reservationCities">
                  <FaMapMarkerAlt className="productIconMap" />
                  {props.cities}
                </p>
                <hr className="hrReservation"></hr>
                <div className="reservationCheckInOutContainer">
                  <p className="reservationCheckInOut">Check in </p>
                  {checkIn == null ? (
                    <span>Selecciona tu fecha</span>) : (
                    <span>{checkIn}</span>
                  )}
                </div>
                <hr className="hrReservation"></hr>
                <div className="reservationCheckInOutContainer">
                  <p className="reservationCheckInOut">Check out </p>
                  {checkIn == null ? (
                    <span>Selecciona tu fecha</span>) : (
                    <span>{checkOut}</span>)}
                </div>
                <hr className="hrReservation"></hr>

                <section className="alertReservation">
                  <Alert
                    header={''}
                    btnText={''}
                    text={alert.text}
                    type={alert.type}
                    show={alert.show}
                    onClosePress={onCloseAlert}
                    pressCloseOnOutsideClick={true}
                    showBorderBottom={true}
                    alertStyles={{}}
                    headerStyles={{}}
                    textStyles={{}}
                    buttonStyles={{}}
                  />
                </section>
                <Link to="reservation/success">
                  <button className="reservationButtonConfirm" onClick={handleReservation}>
                    Confirmar reserva
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CardReservation;