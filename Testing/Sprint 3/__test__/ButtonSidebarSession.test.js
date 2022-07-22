import React from'react';
import ReactDOM from'react-dom';
import ButtonSidebarSession from '../components/Header/Sidebar/ButtonSidebarSession';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';


test("Button sidebar session - cerrar sesion", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Cerrar Sesión/i });
    expect(component).toBeInTheDocument();
});

test("Button sidebar session - lista", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByRole('listitem');
    expect(component).toBeInTheDocument();
});

test("button", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', {name:/Cerrar Sesión/i});

        fireEvent.click(component);

    expect(component).toBeInTheDocument();
})


