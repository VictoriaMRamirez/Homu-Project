import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';


let component = null;


beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )

    expect(component.container).toBeInTheDocument();
});

test("Contenido bloque izquierdo - lema", () => {
    let lema = component.getByText(/Estas en el lugar correcto/i);

    expect(lema).toBeInTheDocument();
})









