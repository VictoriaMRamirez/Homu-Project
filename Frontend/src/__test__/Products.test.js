import Cards from '../components/Cards/Products';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';

let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Cards />
        </BrowserRouter>
    )

    expect(component.container).toBeInTheDocument();
});

test("Productos - cardBox", () => {
    let productInfo = component.getByText(/Cargando.../i);

    expect(productInfo).toBeInTheDocument();
});

test("Productos - infoTitle", () => {
    let productInfo = component.getByText(/Recomendaciones/i);

    expect(productInfo).toBeInTheDocument();
})