import FilterCities from '../components/Navbar/FilterCities';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';

test("productInfoTitle", () => {
    render(
        <BrowserRouter>
            <FilterCities />
        </BrowserRouter>
    );
    const component = screen.getByText(/Recomendaciones/i);
    expect(component).toBeInTheDocument();
})