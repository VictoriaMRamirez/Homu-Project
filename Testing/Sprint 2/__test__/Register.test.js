import React from'react';
import ReactDOM from'react-dom';
import Register from '../components/Pages/Register';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';

let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    )
    // console.log(prettyDOM(component.container));
    expect(component.container).toBeInTheDocument();
});


test("Texto - h1 - register title", () => {
    let registerTitle = component.getByText("Crear Cuenta");
    // console.log(prettyDOM(registerTitle));
    expect(registerTitle).toBeInTheDocument();
});


test("Texto - h4 - register name", () => {
    let registerName = component.getByText("Nombre");
    // console.log(prettyDOM(registerName));
    expect(registerName).toBeInTheDocument();
});

test("Texto - h4 - register surname", () => {
    let registerSurname = component.getByText("Apellido");
    // console.log(prettyDOM(registerSurname));
    expect(registerSurname).toBeInTheDocument();
});

test("Texto - h4 - register email", () => {
    let registerEmail = component.getByText("Email");
    // console.log(prettyDOM(registerEmail));
    expect(registerEmail).toBeInTheDocument();
});

test("Texto - h4 - register password", () => {
    let registerPassword = component.getByText("Contraseña");
    // console.log(prettyDOM(registerPassword));
    expect(registerPassword).toBeInTheDocument();
});

test("Texto - h4 - register password confirm", () => {
    let passwordConfirm = component.getByText("Confirmar contraseña");
    // console.log(prettyDOM(passwordConfirm));
    expect(passwordConfirm).toBeInTheDocument();
});

test("Texto - register", () => {
    let text = component.getByText("¿Ya tienes cuenta?");
    // console.log(prettyDOM(text));
    expect(text).toBeInTheDocument();
})





