import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderLogin from '../components/Header/HeaderLogin';

let component = null;


beforeEach(() => {
    component = render(
        <BrowserRouter>
            <HeaderLogin />
        </BrowserRouter>
    )

    expect(component.container).toBeInTheDocument();
});

test("Contenido bloque izquierdo - lema", () => {
    let lema = component.getByText(/You are in the right place/i);

    expect(lema).toBeInTheDocument();
})
