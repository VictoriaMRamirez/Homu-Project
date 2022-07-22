import Cards from '../components/Cards/Products';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';


test("Productos - infoTitle", () => {
    render(
        <BrowserRouter>
            <Cards />
        </BrowserRouter>
    );
    let productInfo = screen.getByText(/Recomendaciones/i);

    expect(productInfo).toBeInTheDocument();
});

test("Productos - cardBox", () => {
    render(
        <BrowserRouter>
            <Cards />
        </BrowserRouter>
    );
    let productInfo = screen.getByText(/Cargando.../i);

    expect(productInfo).toBeInTheDocument();
})