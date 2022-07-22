import React from'react';
import ReactDOM from'react-dom';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import MapDetail from '../components/ProductInfo/MapDetail';

test("h2 - map title", () => {
    render(
        <BrowserRouter>
            <MapDetail />
        </BrowserRouter>
    );
    let component = screen.getByText(/¿Dónde vas a estar?/i);
    expect(component).toBeInTheDocument();
})