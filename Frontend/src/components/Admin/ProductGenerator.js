import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { TbCirclePlus } from "react-icons/tb";
import "../../styles/Components/ProductGenerator.css"
import useCities from '../services/Post Cities/useCities';
import useFeatures from '../services/Post Features/useFeatures';
import GetFeatures from '../services/Getters/GetFeatures';
import GetCategories from '../services/Getters/GetCategories';
import useRules from '../services/Post Rules/useRules';
import useCancellations from '../services/Post Cancellations/useCancellations';
import useSafeties from '../services/Post Safeties/useSafeties';
import useProducts from '../services/Post Products/useProducts';
import GetRules from '../services/Getters/GetRules';
import GetSafeties from '../services/Getters/GetSafeties';
import GetCancellations from '../services/Getters/GetCancellations';
import GetCities from '../services/Getters/GetCities';
import GetProducts from '../services/Getters/GetProducts';
import { GoChevronLeft } from "react-icons/go";
import Alert from 'react-popup-alert';

function ProductGeneratorCard() {
  const { Cities } = useCities();
  const { Rules } = useRules();
  const { Cancellations } = useCancellations();
  const { Safeties } = useSafeties();
  const { Features } = useFeatures();
  const { Products } = useProducts();
  const [newCity, setNewCity] = useState("");
  const [newRule, setNewRule] = useState("");
  const [newCancellation, setNewCancellation] = useState("");
  const [newSafety, setNewSafety] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [newIcon, setNewIcon] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newReview, setReview] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newMapUrl, setNewMapUrl] = useState("");
  const [newWatch, setNewWatch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newLongDescription, setNewLongDescription] = useState("");

  let categorySel = JSON.parse(localStorage.getItem("categoryId"));
  let maxIdFeatures = JSON.parse(localStorage.getItem("maxIdFeatures"));
  let maxIdCities = JSON.parse(localStorage.getItem("maxIdCities"));
  let maxIdCancellation = JSON.parse(localStorage.getItem("maxIdCancellation"));
  let maxIdSafeties = JSON.parse(localStorage.getItem("maxIdSafeties"));
  let maxIdRules = JSON.parse(localStorage.getItem("maxIdRules"));

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
      text: 'Los elementos no fueron creados, intentelo nuevamente.',
      show: true
    })
  }
  /* -------------------------------------------------------------------------- */
  /*                                 VALIDACION                                 */
  /* -------------------------------------------------------------------------- */
  const [errorAddress, setErrorAddress] = useState("");
  const [errorReview, setErrorReview] = useState("");
  const [errorNewLocation, setErrorNewLocation] = useState("");
  const [errorMapUrl, setErrorMapUrl] = useState("");
  const [errorWatch, setErrorWatch] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorLongDescription, setErrorLongDescription] = useState("");
  const [errorUrl, setErrorUrl] = useState("");

  useEffect(() => {
    if (newTitle.length === 0) {
      setErrorTitle("")
    } else if (newTitle.length < 3) {
      setErrorTitle("El nombre debe tener mas de 2 letras")
    } else {
      setErrorTitle("")
    }
    if (newAddress.length === 0) {
      setErrorAddress("")
    } else if (newAddress.length < 4) {
      setErrorAddress("Ingrese una dirección correcta")
    } else {
      setErrorAddress("")
    }
    if (newRating === "") {
      setErrorReview("")
    } else {
      setErrorReview("Ingrese una puntuación valida")
    }
    if (newLocation.length === 0) {
      setErrorNewLocation("")
    } else if (newLocation.length < 4) {
      setErrorNewLocation("Ingrese una locación correcta")
    } else {
      setErrorNewLocation("")
    }
    if (newMapUrl.length === 0) {
      setErrorMapUrl("")
    } else if (newMapUrl.length < 5) {
      setErrorMapUrl("Ingrese una locación correcta")
    } else {
      setErrorMapUrl("")
    }
    if (newWatch.length === 0) {
      setErrorWatch("")
    } else if (newWatch.length < 3) {
      setErrorWatch("Ingrese una locación correcta")
    } else {
      setErrorWatch("")
    }
    if (newDescription.length === 0) {
      setErrorDescription("")
    } else if (newDescription.length < 20) {
      setErrorDescription("El resumen debe tener al menos 20 letras")
    } else {
      setErrorDescription("")
    }
    if (newLongDescription.length === 0) {
      setErrorLongDescription("")
    } else if (newLongDescription.length < 30) {
      setErrorLongDescription("La descripción debe tener al menos 30 letras")
    } else {
      setErrorLongDescription("")
    }
    if (newUrl.length === 0) {
      setErrorUrl("")
    } else if (newUrl.length < 5) {
      setErrorUrl("Ingrese una url correcta")
    } else {
      setErrorUrl("")
    }
  }, [newWatch, newMapUrl, newLocation, newRating, newAddress, newTitle, newDescription, newLongDescription, newUrl])

  const validateData = () => {
    let isValid = true;
    if (newTitle === "" || newTitle.length < 3) {
      isValid = false;
    }
    if (newAddress === "" || newAddress.length < 4) {
      isValid = false;
    }
    if (newRating === "") {
      isValid = false;
    }
    if (newLocation === "" || newLocation.length < 4) {
      isValid = false;
    }
    if (newMapUrl === "" || newMapUrl.length < 5) {
      isValid = false;
    }
    if (newWatch === "" || newWatch.length < 5) {
      isValid = false;
    }
    if (newWatch === "" || newWatch.length < 5) {
      isValid = false;
    }
    if (newDescription === "" || newDescription.length < 20) {
      isValid = false;
    }
    if (newLongDescription === "" || newLongDescription.length < 30) {
      isValid = false;
    }
    return isValid;
  }

  function postElements(e) {
    Cities({
      "name": newCity
    })

    Features({
      "icon": newIcon,
      "description": newFeature
    })

    Cancellations({
      "description": newCancellation
    })

    Rules({
      "description": newRule
    })

    Safeties({
      "description": newSafety
    })
  }

  const handlePostElements = (e) => {
    e.preventDefault();

    if (!validateData()) {
      onShowAlert("error");
    } else {
      postElements();
    }
  }

  const handleSubmit = (e) => {
    Products({
      address: newAddress,
      rating: 5,
      review: newReview,
      location: newLocation,
      map_url: newMapUrl,
      watch: newWatch,
      title: newTitle,
      description: newDescription,
      long_description: newLongDescription,
      url: newUrl,
      categories: {
        id: categorySel
      },
      features: [{
        "id": maxIdFeatures
      }, {
        "id": 3
      }, {
        "id": 2
      }],
      cities: {
        "id": maxIdCities
      },
      cancellations: [{
        "id": maxIdCancellation
      }],
      rules: [{
        "id": maxIdRules
      }],
      safeties: [{
        "id": maxIdSafeties
      }]
    })
  }

  return (
    <>
      <Header />
      <div className="formContainerProductGenerator">
        <GetProducts />
        <section className='subHeader'>
          <h1>Administración</h1>
          <Link to="/">
            <p className='hidden'>Volver atras</p>
            <GoChevronLeft className='iconArrowBack' />
          </Link>
        </section>
        <h2>Crear propiedad</h2>
        <form className='formCreateProduct'>
          <fieldset className='fieldsetCreateProduct'>
            <legend>Datos de la propiedad</legend>
            <section className='infoCreateProdContainer'>
              <div>
                <label>Nombre de la propiedad</label>
                <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                {newTitle === "" || newTitle.length < 3 ?
                  <p className="validationError">{errorTitle}</p> : <p></p>}

                <label>Dirección</label>
                <input type="text" value={newAddress} onChange={e => setNewAddress(e.target.value)} />
                {newAddress === "" || newAddress.length < 3 ?
                  <p className="validationError">{errorAddress}</p> : <p></p>}

                <label>Puntación (Número del 1 al 5)</label>
                <input type="text" value={newRating} onChange={e => setNewRating(e.target.value)} />

                <label>Descripción completa</label>
                <input type="text" className='descriptionInput' value={newLongDescription} onChange={e => setNewLongDescription(e.target.value)} />
                {newLongDescription === "" || newLongDescription.length < 30 ?
                  <p className="validationError">{errorLongDescription}</p> : <p></p>}
              </div>

              <div>
                <label>¿A qué distancia del centro se encuentra?</label>
                <input type="text" value={newLocation} onChange={e => setNewLocation(e.target.value)} />
                {newLocation === "" || newLocation.length < 4 ?
                  <p className="validationError">{errorNewLocation}</p> : <p></p>}

                <label>Link del mapa de API</label>
                <input type="url" value={newMapUrl} onChange={e => setNewMapUrl(e.target.value)} />
                {newMapUrl === "" || newMapUrl.length < 4 ?
                  <p className="validationError">{errorMapUrl}</p> : <p></p>}

                <label>Link del mapa</label>
                <input type="url" value={newWatch} onChange={e => setNewWatch(e.target.value)} />
                {newWatch === "" || newWatch.length < 10 ?
                  <p className="validationError">{errorWatch}</p> : <p></p>}

                <label>Pequeño resúmen</label>
                <input type="text" className='descriptionInput' value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                {newDescription === "" || newDescription.length < 20 ?
                  <p className="validationError">{errorDescription}</p> : <p></p>}

              </div>
            </section>

            <label>Link de imágen de portada</label>
            <input type="url" value={newUrl} onChange={e => setNewUrl(e.target.value)} />
            {newUrl === "" || newUrl.length < 8 ?
              <p className="validationError">{errorUrl}</p> : <p></p>}

          </fieldset>

          <div className='categoryAndCityContainer'>
            <section>
              <fieldset className='fieldsetCreateProduct'>
                <GetCategories />
              </fieldset>
            </section>

            <section>
              <fieldset className='fieldsetCreateProduct'>
                <legend>Elegir ciudad</legend>
                <GetCities />
                <label>Ingresar otra</label>
                <input value={newCity} onChange={e => setNewCity(e.target.value)} name="text" placeholder="Ingrese la ciudad de la propiedad" />
                {newCity === null || newCity === "" ? maxIdCities = JSON.parse(localStorage.getItem('cityId')) : console.log(newCity)}
              </fieldset>
            </section>
          </div>

          <section className='featureCreateContainer'>
            <fieldset className='fieldsetCreateProduct'>
              <legend>Crea tu propia característica</legend>
              <GetFeatures />
              {newFeature === null || newFeature === "" ? maxIdFeatures = JSON.parse(localStorage.getItem('featureId')) : console.log(newFeature)}
              <section className='featureCreateSection'>
                <div className='featureCreateInfoDiv'>
                  <label>Ingresar descripción</label>
                  <input type="text" value={newFeature} onChange={e => setNewFeature(e.target.value)} name="text" placeholder="Nombre" />
                  <label>Ingresar nombre de Icono</label>
                  <input type="text" value={newIcon} onChange={e => setNewIcon(e.target.value)} name="text" placeholder="Icono" />
                </div>

              </section>
            </fieldset>
          </section>

          <div className='createRulesSafetiesCancellContainer'>
            <section>
              <fieldset className='fieldsetCreateProduct'>
                <GetRules />
                <legend>Elegir reglas</legend>
                <label>Crea tu propia regla</label>
                <input type="text" value={newRule} onChange={e => setNewRule(e.target.value)} name="text" placeholder="Escriba aquí" />
              </fieldset>
            </section>

            <section>
              <fieldset className='fieldsetCreateProduct'>
                <GetSafeties />
                <legend>Elegir información sobre salud y seguridad</legend>
                <label>Crea tu información de salud y seguridad</label>
                <input type="text" value={newSafety} onChange={e => setNewSafety(e.target.value)} name="text" placeholder="Escriba aquí" />
              </fieldset>
            </section>

            <section>
              <fieldset className='fieldsetCreateProduct'>
                <GetCancellations />
                <legend>Elegir políticas de cancelación </legend>
                <label>Crea tu propia política de cancelación</label>
                <input type="text" value={newCancellation} onChange={e => setNewCancellation(e.target.value)} name="text" placeholder="Escriba aquí" />
              </fieldset>
            </section>
          </div>
          <button className='buttonCreate' onClick={handlePostElements}>Guardar información</button>
        </form>

        <section className="alertRegister">
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

        <Link to="/product/addProduct/images">
          <button className='buttonCreateAll' onClick={handleSubmit}>Crear producto</button>
        </Link>

      </div>
      <Footer />
    </>
  )
}

export default ProductGeneratorCard;