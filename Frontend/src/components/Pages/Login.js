import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLogin from "../Header/HeaderLogin";
import LoginError from "./LoginError";
import useUser from "../../hooks/useUser";
import Alert from 'react-popup-alert';
import "../../styles/Components/Login.css";
import "../../styles/Components/Register.css";
import "../../styles/General/Forms.css";
import "../../styles/General/Icons.css";
import "../../styles/General/Elements.css";
import "../../styles/General/Buttons.css";
import useFetchAuth from "../../hooks/useFetchAuth";
import { count } from "rsuite/esm/utils/ReactChildren";

function Login() {
    const { data, isLoaded } = useFetchAuth(`/users/allUsers`);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logged, setLogged] = useState(true);
    const { login } = useUser();
    const [user, setUser] = useState(null);
    const [count, setCount] = useState(0);

    const clearButtonClick = () => {
        localStorage.removeItem("buttonReservationClick");
    }

    const [state, setState] = useState(false);

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    const validationLogin = (e) => {
        e.preventDefault();
        login({ email, password });

        localStorage.removeItem("buttonReservationClick");
    }

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
            text: 'Usuario o contraseña incorrectos, intentelo nuevamente',
            show: true
        })
    }

    useEffect(() => {
        console.log(count)
        if (count > 0) {
            setTimeout("", 1000);
            onShowAlert("error");
            return;
        }
    });

    return (
        <>
            {email.length < 500 ? <HeaderLogin /> : <Header username={email} />}
            <div className="componentContainerLogin">
                <section>
                    <h1 className='titleFormLogin'>Iniciar sesión</h1>
                    <Link to={'/'}>
                        <p className='hidden'>Icono cerrar sesión</p>
                        <FaWindowClose onClick={clearButtonClick} className="iconClose" />
                    </Link>
                </section>

                <form className="formContainerLogin" onSubmit={validationLogin}>
                    <fieldset>
                        {localStorage.getItem("buttonReservationClick") == "true" ?
                            <LoginError /> : ""}
                        <section>
                            <label for="Email">Email</label>
                            <input id="Email" type="text" placeholder="Ingrese su usuario" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </section>
                        <section className="passwordSection">
                            <label for="Password">Contraseña</label>
                            <input id="Password" type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="buttonFormLogin" onClick={toggleBtn}>
                                {state ? <>
                                    <p className="hidden">Boton mostrar contraseña</p>
                                    <AiOutlineEye className="iconEyeBlind" />
                                </> :
                                    <>
                                        <p className="hidden">Boton ocultar contraseña</p>
                                        <AiOutlineEyeInvisible className="iconEyeBlind" />
                                    </>}
                            </button>
                        </section>
                        <section className="buttonAccessAccount">
                            <button type="submit" className="buttonSubmitLogin" onClick={() => setCount(count + 1)} >
                                Ingresar
                            </button>
                        </section>
                    </fieldset>
                </form>
                <section className="alertLogin">
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

                <section className="loginAccountContainer">
                    <p> ¿Aún no tienes cuenta? </p>
                    <Link to="/register">
                        <p className="spanAccountColorLogin">Registrate</p>
                    </Link>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Login;