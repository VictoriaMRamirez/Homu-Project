import React from'react';
import ReactDOM from'react-dom';
import MyBookings from '../components/User/MyBookings';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';

test("h3 - Mis reservas", () => {
    render(
        <BrowserRouter>
            <MyBookings />
        </BrowserRouter>
    );
    let component = screen.getByText(/Mis reservas/i);
    expect(component).toBeInTheDocument();
})