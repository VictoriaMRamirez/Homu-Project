import React from'react';
import ReactDOM from'react-dom';
import Login from '../components/Pages/Login';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';


let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
    // console.log(prettyDOM(component.container));
    expect(component.container).toBeInTheDocument();
});


test("Texto - h1 - login title", () => {
    let loginTitle = component.getByText("Iniciar sesión");
    // console.log(prettyDOM(loginTitle));
    expect(loginTitle).toBeInTheDocument();
    
});


test("Texto - h5 - email", () => {
    let loginEmail = component.getByText(/Correo electrónico/i);
    // console.log(prettyDOM(loginEmail));
    expect(loginEmail).toBeInTheDocument();
    
});

test("Texto - h5 - password", () => {
    let loginPassword = component.getByText(/Contraseña/i);
    // console.log(prettyDOM(loginPassword));
    expect(loginPassword).toBeInTheDocument();
    
});

test("Texto - register", () => {
    let textRegister = component.getByText(/¿Aún no tenes cuenta?/i);
    // console.log(prettyDOM(textRegister));
    expect(textRegister).toBeInTheDocument();
    
})





















