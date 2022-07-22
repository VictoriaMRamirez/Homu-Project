import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import ProductGenerator from '../components/Admin/ProductGenerator';

test("Logo de Homu Proyect", () => {
    render(
        <BrowserRouter>
            <ProductGenerator />
        </BrowserRouter>
    );

    const component = screen.getByText(/Logo de Homu Proyect/i);
    expect(component).toBeInTheDocument();
})





