import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import ReservationSuccess from '../components/Cards/ReservationSuccess';

test("success", () => {
    render(
        <BrowserRouter>
            <ReservationSuccess />
        </BrowserRouter>
    );
    const component = screen.getByText(/Su reserva se ha realizado con éxito/i);
    expect(component).toBeInTheDocument();
});