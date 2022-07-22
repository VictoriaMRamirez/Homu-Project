import Reservation from '../components/Cards/Reservation';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';

test("Cargando...", () => {
    render(
        <BrowserRouter>
            <Reservation />
        </BrowserRouter>
    );

    const component = screen.getByText(/Cargando.../i);
    expect(component).toBeInTheDocument();
});