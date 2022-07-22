import React from'react';
import ReactDOM from'react-dom';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderRegister from '../components/Header/HeaderRegister';



test("button - register", () => {
    render(
        <BrowserRouter>
            <HeaderRegister />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', {name:/Inicia Sesion/i});
    
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("button login password", () => {
    render(
        <BrowserRouter>
        <HeaderRegister />
    </BrowserRouter>
    )
    let loginPassword = screen.getByText(/Iniciar Sesión/i);
    expect(loginPassword).toBeInTheDocument();
});

test("p - Icono menú hamburguesa", () => {
    render(
        <BrowserRouter>
        <HeaderRegister />
    </BrowserRouter>
    )
    let loginPassword = screen.getByText(/Icono menú hamburguesa/i);
    expect(loginPassword).toBeInTheDocument();
});

test("p - Icono cerrar menú hamburguesa", () => {
    render(
        <BrowserRouter>
        <HeaderRegister />
    </BrowserRouter>
    )
    let loginPassword = screen.getByText(/Icono cerrar menú hamburguesa/i);
    expect(loginPassword).toBeInTheDocument();
});

test("lista - Icono cerrar menú hamburguesa", () => {
    render(
        <BrowserRouter>
            <HeaderRegister />
        </BrowserRouter>
    );

    const component = screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'Icono cerrar menú hamburguesa');
    expect(component).toBeInTheDocument();
});

test("lista - MENÚ", () => {
    render(
        <BrowserRouter>
            <HeaderRegister />
        </BrowserRouter>
    );

    const component = screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'MENÚ');
    expect(component).toBeInTheDocument();
});

test("lista - Iniciar Sesión", () => {
    render(
        <BrowserRouter>
            <HeaderRegister />
        </BrowserRouter>
    );

    const component = screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'Iniciar Sesión');
    expect(component).toBeInTheDocument();
})

