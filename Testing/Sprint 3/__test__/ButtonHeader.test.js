import React from'react';
import ReactDOM from'react-dom';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';
import ButtonsHeader from '../components/Header/Sidebar/ButtonsHeader'



test("Header button - login", () => {
    render(
        <BrowserRouter>
            <ButtonsHeader />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Iniciar Sesion/i });
    expect(component).toBeInTheDocument();
});

test("Header button - register", () => {
    render(
        <BrowserRouter>
            <ButtonsHeader />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Crear Cuenta/i });
    expect(component).toBeInTheDocument();
})
