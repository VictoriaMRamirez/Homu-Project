import Categories from '../components/Cards/Categories';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';


test('Categorias - container', () => {
    render(<Categories />);
    const component = screen.getByText(/Buscar por tipo de alojamiento/i);
    expect(component).toBeInTheDocument();
});

test('Categorias - p', () => {
    render(<Categories />);
    const component = screen.getByText(/Cargando.../i);
    expect(component).toBeInTheDocument();
})

