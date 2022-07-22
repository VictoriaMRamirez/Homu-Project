import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/Pages/Login';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';


test("Texto - h1 - login title", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    let loginTitle = screen.getByRole("heading", {name:/Iniciar sesión/i});
    expect(loginTitle).toBeInTheDocument();

});

test("Texto - h5 - email", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    let loginTitle = screen.getByText(/Correo electrónico/i);

    expect(loginTitle).toBeInTheDocument();

});


test("Texto - h5 - password", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    let loginPassword = screen.getByText(/Contraseña/i);
    expect(loginPassword).toBeInTheDocument();
});

test("Texto - register", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    let textRegister = screen.getByText(/¿Aún no tenes cuenta/i);
    expect(textRegister).toBeInTheDocument();
});


test("Login", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByPlaceholderText(/Ingrese su correo electrónico/i);
    expect(component).toBeInTheDocument();
});

test("Login - cuenta", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByPlaceholderText(/Ingrese su contraseña/i);
    expect(component).toBeInTheDocument();
});

test("btn_singIn - button", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', { name: /Ingresar/i });

        fireEvent.click(component);

    expect(component).toBeInTheDocument();
});


test("img - login", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByRole('img', {  name: /logo empresa/i})

        fireEvent.click(component);

    expect(component).toBeInTheDocument();
})
























