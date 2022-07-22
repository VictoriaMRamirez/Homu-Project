import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import ProductGeneratorSuccess from '../components/Admin/ProductGeneratorSuccess';

test("success", () => {
    render(
        <BrowserRouter>
            <ProductGeneratorSuccess />
        </BrowserRouter>
    );
    const component = screen.getByText(/Su producto se ha creado con éxito/i);
    expect(component).toBeInTheDocument();
});