import React from'react';
import ReactDOM from'react-dom';
import ButtonSidebarSession from '../components/Header/Sidebar/ButtonSidebarSession';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';


test("Button sidebar session - cerrar sesion", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByText(/¿Deseas?/i);
    expect(component).toBeInTheDocument();
});

test("Span sidebar session - favoritos", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByText(/mis favoritos/i);
    expect(component).toBeInTheDocument();
});


test("Span sidebar session - reservas", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByText(/mis reservas/i);
    expect(component).toBeInTheDocument();
});

test("lista - mis reservas", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'Mis reservas');
    expect(component).toBeInTheDocument();
});

test("lista - mis favoritos", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getAllByRole('listitem').find(listitem => listitem.textContent === 'Mis favoritos');
    expect(component).toBeInTheDocument();
});

test("button - event mis reservas", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Mis reservas/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("button - event Mis favoritos", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Mis favoritos/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("button - Mis favoritos", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Mis favoritos/i });
    expect(component).toBeInTheDocument();
});

test("button - mis reservas", () => {
    render(
        <BrowserRouter>
            <ButtonSidebarSession />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Mis reservas/i });
    expect(component).toBeInTheDocument();
})



