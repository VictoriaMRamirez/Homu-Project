import React from 'react';
import ReactDOM from 'react-dom';
import GetCategories from '../components/services/Getters/GetCategories';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Texto - option", () => {
    render(
        <BrowserRouter>
        <GetCategories />
    </BrowserRouter>
    )
    let component = screen.getByRole('option', {name:/Selecciona la categoría/i});
    expect(component).toBeInTheDocument();

})