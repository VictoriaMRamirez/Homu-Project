import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Pages/Home';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Texto h2", () => {
    render(
        <BrowserRouter>
        <Home />
    </BrowserRouter>
    )
    let texto = screen.getByText(/Estás en el lugar correcto/i);
    expect(texto).toBeInTheDocument();
});

test("Texto - p", () => {
    render(
        <BrowserRouter>
        <Home />
    </BrowserRouter>
    )
    let texto = screen.getByText(/Logo de Homu Proyect/i);
    expect(texto).toBeInTheDocument();
});

test(" bodyTitle", () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    const component = screen.getByText(/Buscar ofertas en hoteles, casas y mucho más/i);
    expect(component).toBeInTheDocument();
});

test("button", () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', { name: /Buscar/i });
    expect(component).toBeInTheDocument();
});

test("event button", () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    const component = screen.getByRole('button', { name: /Buscar/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("placeholder", () => {
    render(
        <BrowserRouter>
           <Home />
        </BrowserRouter>
    );
    const component = screen.getByRole('option', {name:/Selecciona el destino/i});
    expect(component).toBeInTheDocument();
});

test('Categorias - container', () => {
    render(
        <BrowserRouter>
           <Home />
        </BrowserRouter>
    );
    const component = screen.getByText(/Buscar por tipo de alojamiento/i);
    expect(component).toBeInTheDocument();
});

test("Productos - infoTitle", () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    let productInfo = screen.getByText(/Recomendaciones/i);

    expect(productInfo).toBeInTheDocument();
});

test("Footer - fecha", () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    let footerInfo = screen.getByText(/2022/i);
    expect(footerInfo).toBeInTheDocument();
})
