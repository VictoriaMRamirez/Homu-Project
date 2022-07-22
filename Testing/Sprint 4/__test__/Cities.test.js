import Cities from '../components/Cards/Cities';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';

test("Cities - load", () => {
    render(
        <BrowserRouter>
            <Cities />
        </BrowserRouter>
    );
    const component = screen.getByText(/Cargando.../i);
    expect(component).toBeInTheDocument();
})