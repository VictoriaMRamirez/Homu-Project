import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useImages from '../services/Post Images/useImages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Alert from 'react-popup-alert';

function UploadImages() {
    const [newImagesUrl, setNewImagesUrl] = useState("");
    const [newImagesUrl2, setNewImagesUrl2] = useState("");
    const [newImagesUrl3, setNewImagesUrl3] = useState("");
    const [newImagesUrl4, setNewImagesUrl4] = useState("");
    const [newImagesUrl5, setNewImagesUrl5] = useState("");
    const { Images } = useImages();
    let navigate = useNavigate();
    let maxIdProduct = JSON.parse(localStorage.getItem("maxIdProduct"));

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
            text: 'Las  imagenes no fueron subidas, intentelo nuevamente',
            show: true
        })
    }

    function uploadImages(e) {
        Images({
            "url": newImagesUrl,
            "products": {
                "id": maxIdProduct
            }
        })
        Images({
            "url": newImagesUrl2,
            "products": {
                "id": maxIdProduct
            }
        })
        Images({
            "url": newImagesUrl3,
            "products": {
                "id": maxIdProduct
            }
        })
        Images({
            "url": newImagesUrl4,
            "products": {
                "id": maxIdProduct
            }
        })
    }

    /* -------------------------------------------------------------------------- */
    /*                                 VALIDACION                                 */
    /* -------------------------------------------------------------------------- */
    const [errorUrl1, setErrorUrl1] = useState("");
    const [errorUrl2, setErrorUrl2] = useState("");
    const [errorUrl3, setErrorUrl3] = useState("");
    const [errorUrl4, setErrorUrl4] = useState("");

    useEffect(() => {
        if (newImagesUrl.length === 0) {
            setErrorUrl1("");
        } else if (newImagesUrl.length < 15) {
            setErrorUrl1("Ingrese una url valida");
        } else {
            setErrorUrl1("");
        }
        if (newImagesUrl2.length === 0) {
            setErrorUrl2("")
        } else if (newImagesUrl2.length < 15) {
            setErrorUrl2("Ingrese una url valida")
        } else {
            setErrorUrl2("")
        }
        if (newImagesUrl3.length === 0) {
            setErrorUrl3("")
        } else if (newImagesUrl2.length < 15) {
            setErrorUrl3("Ingrese una url valida")
        } else {
            setErrorUrl2("")
        }
        if (newImagesUrl4.length === 0) {
            setErrorUrl4("")
        } else if (newImagesUrl4.length < 15) {
            setErrorUrl4("Ingrese una url valida")
        } else {
            setErrorUrl4("")
        }
    }, [newImagesUrl, newImagesUrl2, newImagesUrl3, newImagesUrl4])

    const validateData = () => {
        let isValid = true;
        if (newImagesUrl === "" || newImagesUrl.length < 15) {
            isValid = false;
        }
        if (newImagesUrl2 === "" || newImagesUrl2.length < 15) {
            isValid = false;
        }
        if (newImagesUrl3 === "" || newImagesUrl3.length < 15) {
            isValid = false;
        }
        if (newImagesUrl4 === "" || newImagesUrl4.length < 15) {
            isValid = false;
        }
        return isValid;
    }

    const handleImages = (e) => {
        e.preventDefault();

        if (!validateData()) {
            onShowAlert("error");
        } else {
            uploadImages();
            navigate("/product/addProduct/success");
        }
    }

    return (
        <>
            <Header />
            <section className="imagesCreateContainer">
                <form className='formCreateImages'>
                    <fieldset className='fieldsetCreateImage'>
                        <legend>Cargar imágenes</legend>

                        <input type="url" value={newImagesUrl} onChange={e => setNewImagesUrl(e.target.value)} placeholder="Insertar url de la imágen" />
                        {newImagesUrl === "" || newImagesUrl.length < 15 ?
                            <p className="validationError">{errorUrl1}</p> : <p></p>}

                        <input type="url" value={newImagesUrl2} onChange={e => setNewImagesUrl2(e.target.value)} placeholder="Insertar url de la imágen" />
                        {newImagesUrl2 === "" || newImagesUrl2.length < 15 ?
                            <p className="validationError">{errorUrl2}</p> : <p></p>}

                        <input type="url" value={newImagesUrl3} onChange={e => setNewImagesUrl3(e.target.value)} placeholder="Insertar url de la imágen" />
                        {newImagesUrl3 === "" || newImagesUrl3.length < 15 ?
                            <p className="validationError">{errorUrl3}</p> : <p></p>}

                        <input type="url" value={newImagesUrl4} onChange={e => setNewImagesUrl4(e.target.value)} placeholder="Insertar url de la imágen" />
                        {newImagesUrl4 === "" || newImagesUrl4.length < 15 ?
                            <p className="validationError">{errorUrl4}</p> : <p></p>}
                    </fieldset>
                    <Link to="/product/addProduct/success">
                        <button className='buttonCreate' onClick={handleImages}>Cargar imagenes</button>
                    </Link>
                    <section className="alertImages">
                        <Alert
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
                </form>
                <Footer />
            </section>
        </>
    )
}

export default UploadImages;