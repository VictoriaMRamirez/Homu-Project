import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import HeaderRegister from "../Header/HeaderRegister";
import emailjs from '@emailjs/browser';
import useUserSingnUp from "../../hooks/useUserSignUp";
import validator from 'validator';
import PasswordValidator from "password-validator";
import Alert from 'react-popup-alert';
import "../../styles/Components/Register.css";
import "../../styles/General/Forms.css";
import "../../styles/General/Icons.css";
import "../../styles/General/Elements.css";
import "../../styles/General/Buttons.css";

function Register() {
    let navigate = useNavigate();
    const [state, setState] = useState(false);
    const [state1, setState1] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [city, setCity] = useState("");
    const { SignUp, isSigned } = useUserSingnUp();

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
            text: 'La cuenta no fue creada, intentelo nuevamente',
            show: true
        })
    }
    /* -------------------------------------------------------------------------- */
    /*                                 VALIDACION                                 */
    /* -------------------------------------------------------------------------- */
    const [errorName, setErrorName] = useState("");
    const [errorSurname, setErrorSurname] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorCity, setErrorCity] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");

    const emailVerified = validator.isEmail(email);

    let schema = new PasswordValidator();
    schema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                 // Maximum length 100
        .has().letters()                               // Must have letters
        .has().digits()                                // Must have digits
        .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
    let passwordValidated = schema.validate(password);
    let passwordConfirmValidated = schema.validate(passwordConfirm);

    useEffect(() => {
        if (name.length === 0) {
            setErrorName("")
        } else if (name.length < 3) {
            setErrorName("El nombre debe tener mas de 3 letras")
        } else {
            setErrorName("")
        }
        if (surname.length === 0) {
            setErrorSurname("")
        } else if (surname.length < 4) {
            setErrorSurname("El apellido debe tener mas de 4 letras")
        } else {
            setErrorSurname("")
        }
        if (emailVerified === true || email.length === 0) {
            setErrorEmail("")
        } else {
            setErrorEmail("Ingrese un email valido")
        }
        if (city.length === 0) {
            setErrorCity("")
        } else if (city.length < 3) {
            setErrorCity("La ciudad debe que tener mas de 3 letras")
        } else {
            setErrorCity("")
        }
        if (passwordValidated) {
            setErrorPassword("")
        } else if (password.length !== 0 && password.length < 8) {
            setErrorPassword("La contraseña debe tener al menos 8 letras y un número")
        }
        if (passwordConfirmValidated) {
            setErrorConfirm("")
        } else if (passwordConfirm.length < 8) {
            setErrorConfirm("La contraseña debe tener al menos 8 letras y un número")
        }
        if (password !== passwordConfirm) {
            setErrorConfirm("Las contraseñas no coinciden")
        }
    }, [emailVerified, city, password, passwordConfirm, name, surname])

    const validateData = () => {
        let isValid = true;
        if (name === "" || name.length < 4) {
            isValid = false;
        }
        if (surname === "" || surname.length < 4) {
            isValid = false;
        }
        if (!emailVerified) {
            isValid = false;
        }
        if (city === "" || city.length < 3) {
            isValid = false;
        }
        if (!passwordValidated) {
            isValid = false;
        }
        if (!passwordConfirmValidated) {
            isValid = false;
        }
        if (password !== passwordConfirm) {
            isValid = false;
        }
        return isValid;
    }

    /* -------------------------------------------------------------------------- */
    /*                               FIN VALIDACION                               */
    /* -------------------------------------------------------------------------- */

    const sendEmail = (e) => {
        emailjs.sendForm('homuProyect', 'template_vxfmf4b', "#formRegister", 'SLkHg1L_8kzpGb-yt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    const toggleBtnConfirm = (e) => {
        setState1(prevState => !prevState);
        e.preventDefault();
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeSurname = (e) => {
        setSurname(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        if (!validateData()) {
            onShowAlert("error");
        } else {
            SignUp({ name, surname, email, password, city });
            sendEmail();
            navigate("/login");
        }
    }

    return (
        <>
            <HeaderRegister />
            <div className="formRegisterContainer">
                <section>
                    <h1 className="titleFormRegister">Crear Cuenta</h1>
                    <Link to='/'>
                        <p className="hidden">Icono cerrar página de registro</p>
                        <FaWindowClose className="iconClose" />
                    </Link>
                </section>

                <form className="formContainerRegister" id="formRegister">
                    <fieldset>
                        <div className="sectionFormContainerRegister">
                            <section>
                                <label for="Name">Nombre</label>
                                <input value={name} onChange={onChangeName} type="text" placeholder="Ingrese su nombre" name="name" id="Name" />
                                {name === "" || name.length < 4 ?
                                    <p className="validationError">{errorName}</p> : <p></p>}
                            </section>
                            <section>
                                <label for="Surname">Apellido</label>
                                <input value={surname} onChange={onChangeSurname} type="text" placeholder="Ingrese su apellido" id="Surname" required />
                                {surname === "" || surname.length < 4 ?
                                    <p className="validationError">{errorSurname}</p> : <p></p>
                                }
                            </section>
                        </div>

                        <div className="sectionFlexContaineRegister">
                            <section>
                                <label for="CityName">Ciudad</label>
                                <input value={city} onChange={onChangeCity} type="text" placeholder="Ingrese su ciudad" id="CityName" />
                                {city === "" || city.length < 3 ?
                                    <p className="validationError">{errorCity}</p> : <p></p>
                                }
                            </section>
                            <section>
                                <label for="Email">Email</label>
                                <input value={email} onChange={onChangeEmail} type="email" placeholder="Ingrese su email" name="email" id="Email" />
                                {emailVerified ? <p></p> : <p className="validationError">{errorEmail}</p>
                                }
                            </section>
                            <section className="passwordSectionRegister">
                                <label for="Password">Contraseña</label>
                                <input type={state ? "text" : "password"} name="password" placeholder="Ingrese una contraseña" value={password} onChange={onChangePassword} id="Password" />
                                <button className="buttonFormRegister" onClick={toggleBtn}>
                                    {state ? <>
                                        <p className="hidden">Botón ocultar contraseña</p>
                                        <AiOutlineEye className="iconEyeBlind" />
                                    </> :
                                        <>
                                            <p className="hidden">Botón mostrar contraseña</p>
                                            <AiOutlineEyeInvisible className="iconEyeBlind" />
                                        </>}
                                </button>
                                {passwordValidated ?
                                    <p></p> : <p className="validationError">{errorPassword}</p>
                                }
                            </section>
                            <section className="passwordSectionRegister">
                                <label for="ConfirmPassword">Confirmar contraseña </label>
                                <input type={state1 ? "text" : "password"} placeholder="Confirme la contraseña" value={passwordConfirm} onChange={onChangePasswordConfirm} id="ConfirmPassword" />
                                <button className="buttonFormRegister" onClick={toggleBtnConfirm}>
                                    {state1 ? <AiOutlineEye className="iconEyeBlind" /> : <AiOutlineEyeInvisible className="iconEyeBlind" />}
                                </button>
                                {passwordConfirmValidated || password !== passwordConfirm ?
                                    <p></p> : <p className="validationError">{errorPassword}</p>
                                }
                                {password === passwordConfirm ?
                                    <p></p> : <p className="validationError">Las contraseñas no coinciden</p>
                                }
                            </section>

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
                        </div>

                        <section className="buttonCreateAccount">
                            <Link to="/login">
                                <p className="hidden">Link hacia formulario de iniciar sesión</p>
                                <input type="submit" className="buttonSubmitRegister" value="Crear cuenta" onClick={handleSignUp} />
                            </Link>
                        </section>
                    </fieldset>
                </form>

                <section className="createAccountContainer">
                    <p> ¿Ya tienes una cuenta? </p>
                    <Link to="/login">
                        <button className="spanAccountColorRegister">Inicia sesión</button>
                    </Link>
                </section>
            </div>
            <Footer />

        </>
    );
}

export default Register;