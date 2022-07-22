import React from'react';
import ReactDOM from'react-dom';
import Register from '../components/Pages/Register';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';


// test("Texto - h1 - register title", () => {
//     render(
//         <BrowserRouter>
//             <Register />
//         </BrowserRouter>
//     );
//     let registerTitle = screen.getByText("Crear Cuenta");
//     expect(registerTitle).toBeInTheDocument();
// });


test("Texto - h4 - register name", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    let registerName = screen.getByText("Nombre");
    expect(registerName).toBeInTheDocument();
});

test("Texto - h4 - register surname", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    let registerSurname = screen.getByText("Apellido");
    expect(registerSurname).toBeInTheDocument();
});

test("Texto - h4 - register email", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    let registerEmail = screen.getByText("Email");
    expect(registerEmail).toBeInTheDocument();
});

test("Texto - h4 - register password", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    let registerPassword = screen.getByText("Contraseña");
    expect(registerPassword).toBeInTheDocument();
});

test("Texto - h4 - register password confirm", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    let passwordConfirm = screen.getByText("Confirmar contraseña");
    expect(passwordConfirm).toBeInTheDocument();
});

test("btn_register - inputValue", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    const component = screen.getByDisplayValue(/Crear Cuenta/i);

    expect(component).toBeInTheDocument();
});

test("btn_register -button", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', {name:/Crear Cuenta/i});

    fireEvent.click(component);

    expect(component).toBeInTheDocument();
})

















