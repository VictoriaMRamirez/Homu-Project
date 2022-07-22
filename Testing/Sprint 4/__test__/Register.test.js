import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../components/Pages/Register';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';


test('p - Icono cerrar página de registro', () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    const component = screen.getByText(/Icono cerrar página de registro/i);
    expect(component).toBeInTheDocument();
});

test("Ingrese su nombre - input", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );

    const component = screen.getByText(/Nombre/i);
    expect(component).toBeInTheDocument();
});

test("Ingrese su Apellido - input", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );

    const component = screen.getByText(/Apellido/i);
    expect(component).toBeInTheDocument();
});

test("Ingrese su Ciudad - input", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );

    const component = screen.getByText(/Ciudad/i);
    expect(component).toBeInTheDocument();
});

test("Ingrese su Email - input", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );

    const component = screen.getByText(/Email/i);
    expect(component).toBeInTheDocument();
});

test("p - Link hacia formulario de iniciar sesión", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );

    const component = screen.getByText(/Link hacia formulario de iniciar sesión/i);
    expect(component).toBeInTheDocument();
});

test("button - event Inicia sesión", () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Inicia sesión/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("button - Inicia sesión", () => {
    render(
        <BrowserRouter>
             <Register />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Inicia sesión/i });
    expect(component).toBeInTheDocument();
});

