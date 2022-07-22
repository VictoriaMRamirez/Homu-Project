import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderLogoMotto from '../components/Header/HeaderLogoMotto';

test("Texto h2", () => {
    render(
        <BrowserRouter>
        <HeaderLogoMotto />
    </BrowserRouter>
    )
    let texto = screen.getByText(/Estás en el lugar correcto/i);
    expect(texto).toBeInTheDocument();
});

test("Texto - p", () => {
    render(
        <BrowserRouter>
        <HeaderLogoMotto />
    </BrowserRouter>
    )
    let texto = screen.getByText(/Logo de Homu Proyect/i);
    expect(texto).toBeInTheDocument();
});

test("img - logo", () => {
    render(
        <BrowserRouter>
        <HeaderLogoMotto />
    </BrowserRouter>
    )
    let texto = screen.getByRole('img');
    expect(texto).toBeInTheDocument();
})