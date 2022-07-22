import Navbar from '../components/Navbar/Navbar';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';

test("Navbar - bodyTitle", () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    const component = screen.getByText(/Buscar ofertas en hoteles, casas y mucho más/i);
    expect(component).toBeInTheDocument();
});

test("Navbar - button", () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', { name: /Buscar/i });
    expect(component).toBeInTheDocument();
});

test("Navbar - event button", () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', { name: /Buscar/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("Navbar - placeholder", () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    const component = screen.getByRole('option', {name:/Selecciona el destino/i});
    expect(component).toBeInTheDocument();
})






