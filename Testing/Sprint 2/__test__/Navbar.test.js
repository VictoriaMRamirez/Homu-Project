import Navbar from '../components/Navbar/Navbar';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';

let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )

    expect(component.container).toBeInTheDocument();
});

test("Navbar - bodtTitle", () => {
    let navTitle = component.getByText(/Buscar ofertas en hoteles, casas y mucho más/i);
    expect(navTitle).toBeInTheDocument();
})


