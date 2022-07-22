import CardReservation from '../components/Cards/CardReservation';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';

test("p - Volver atrás", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByText(/Volver atrás/i);
    expect(component).toBeInTheDocument();
});

test("legend - Tus datos", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByText(/Tus datos/i);
    expect(component).toBeInTheDocument();
});

test("h4 - Seleccioná tu fecha de reserva", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByText(/Seleccioná tu fecha de reserva/i);
    expect(component).toBeInTheDocument();
});

test("h4 - Tu horario de llegada", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByText(/Tu horario de llegada/i);
    expect(component).toBeInTheDocument();
});

test("p - reservationCheckInfo", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByText(/Tu habitación va a estar lista para el check-in entre las 10 y las 11 PM/i);
    expect(component).toBeInTheDocument();
});

test("p - Indicá tu horario estimado de llegada", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByText(/Indicá tu horario estimado de llegada/i);
    expect(component).toBeInTheDocument();
});

test("h2 - Detalle de la reserva", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByText(/Detalle de la reserva/i);
    expect(component).toBeInTheDocument();
});

test("button - Confirmar reserva", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Confirmar reserva/i });
    expect(component).toBeInTheDocument();
});

test("button - event Confirmar reserva", () => {
    render(
        <BrowserRouter>
            <CardReservation />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Confirmar reserva/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
})