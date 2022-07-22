import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderLogin from '../components/Header/HeaderLogin';


test("Contenido button", () => {
    render(
        <BrowserRouter>
            <HeaderLogin />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Registrate/i });
    
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("Texto", () => {
    render(
        <BrowserRouter>
        <HeaderLogin />
    </BrowserRouter>
    )
    let texto = screen.getByText(/MENÚ/i);
    expect(texto).toBeInTheDocument();
})






