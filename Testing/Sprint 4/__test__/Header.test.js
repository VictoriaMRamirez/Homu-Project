import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
//import { prettyDOM } from '@testing-library/dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';


test("Texto h2", () => {
    render(
        <BrowserRouter>
        <Header />
    </BrowserRouter>
    )
    let texto = screen.getByText(/Estás en el lugar correcto/i);
    expect(texto).toBeInTheDocument();
});

test("Texto - p", () => {
    render(
        <BrowserRouter>
        <Header />
    </BrowserRouter>
    )
    let texto = screen.getByText(/Logo de Homu Proyect/i);
    expect(texto).toBeInTheDocument();
})









