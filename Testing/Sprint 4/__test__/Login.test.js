import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/Pages/Login';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';



test("Texto - h1 - login title", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    let loginTitle = screen.getByRole("heading", {name:/Iniciar sesión/i});
    expect(loginTitle).toBeInTheDocument();

});

test("Texto - h1 - title", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    let loginTitle = screen.getByText(/Iniciar sesión/i);
    expect(loginTitle).toBeInTheDocument();

})

test("Texto - h5 - email", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    let loginEmail = screen.getByText(/Email/i);

    expect(loginEmail).toBeInTheDocument();

});


test("input user", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    expect(screen.getByPlaceholderText('Ingrese su usuario')).toBeInTheDocument();
});

test("input password", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    expect(screen.getByPlaceholderText('Ingrese su contraseña')).toBeInTheDocument();
});

test("Texto - register", () => {
    render(
        <BrowserRouter>
        <Login />
    </BrowserRouter>
    )
    let textRegister = screen.getByText(/¿Aún no tienes cuenta/i);
    expect(textRegister).toBeInTheDocument();
});


test("Login ingreso usuario", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByPlaceholderText(/Ingrese su usuario/i);
    expect(component).toBeInTheDocument();
});

test("Login ingreso password", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByPlaceholderText(/Ingrese su contraseña/i);
    expect(component).toBeInTheDocument();
});

test("btn_singIn - event button", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', { name: /Ingresar/i });

        fireEvent.click(component);

    expect(component).toBeInTheDocument();
});

test("btn_singIn - button", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', { name: /Ingresar/i });

    expect(component).toBeInTheDocument();
});

test("Icono cerrar sesión", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const component = screen.getByText(/Icono cerrar sesión/i);

    expect(component).toBeInTheDocument();
})
























