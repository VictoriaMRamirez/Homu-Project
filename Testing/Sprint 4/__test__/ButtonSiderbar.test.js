import React from'react';
import ReactDOM from'react-dom';
import ButtonsSidebar from '../components/Header/Sidebar/ButtonsSidebar';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';

test("Button sidebar session - Iniciar Sesión", () => {
    render(
        <BrowserRouter>
            <ButtonsSidebar />
        </BrowserRouter>
    );

    const component = screen.getByText(/Iniciar Sesión/i);
    expect(component).toBeInTheDocument();
});

test("lista -Iniciar Sesión", () => {
    render(
        <BrowserRouter>
            <ButtonsSidebar />
        </BrowserRouter>
    );

    const component = screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'Iniciar Sesión');
    expect(component).toBeInTheDocument();
});

test("Button sidebar session - Crear cuenta", () => {
    render(
        <BrowserRouter>
            <ButtonsSidebar />
        </BrowserRouter>
    );

    const component = screen.getByText(/Crear cuenta/i);
    expect(component).toBeInTheDocument();
});

test("lista -Crear cuenta", () => {
    render(
        <BrowserRouter>
            <ButtonsSidebar />
        </BrowserRouter>
    );

    const component = screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'Crear cuenta');
    expect(component).toBeInTheDocument();
});