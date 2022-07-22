import React from'react';
import ReactDOM from'react-dom';
import MyBookingCard from '../components/User/MyBookingCard';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';

test("h2 - reservation card title", () => {
    render(
        <BrowserRouter>
            <MyBookingCard />
        </BrowserRouter>
    );
    let registerTitle = screen.getByText(/Detalle de la reserva/i);
    expect(registerTitle).toBeInTheDocument();
});

test("reservation check in", () => {
    render(
        <BrowserRouter>
            <MyBookingCard />
        </BrowserRouter>
    );
    let registerTitle = screen.getByText(/Check in/i);
    expect(registerTitle).toBeInTheDocument();
});

test("reservation check out", () => {
    render(
        <BrowserRouter>
            <MyBookingCard />
        </BrowserRouter>
    );
    let registerTitle = screen.getByText(/Check out/i);
    expect(registerTitle).toBeInTheDocument();
})