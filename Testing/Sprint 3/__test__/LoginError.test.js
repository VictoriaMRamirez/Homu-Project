import LoginError from '../components/Pages/LoginError';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';

test("loginErrorFlex", () => {
    render(<LoginError />);
    let loginInfo = screen.getByText(/Para realizar una reserva necesitas estar logueado/i);
    expect(loginInfo).toBeInTheDocument();
});