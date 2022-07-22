import CardCities from '../components/Navbar/CardCities';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';

test("card cities text", () => {
    render(
        <BrowserRouter>
            <CardCities />
        </BrowserRouter>
    );
    const component = screen.getByText(/Selecciona el destino/i);
    expect(component).toBeInTheDocument();
});

test("Contenido button", () => {
    render(
        <BrowserRouter>
            <CardCities />
        </BrowserRouter>
    );

    const component = screen.getByRole('combobox');
    
    expect(component).toBeInTheDocument();
})