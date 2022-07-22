import React from 'react';
import ReactDOM from 'react-dom';
import GetCities from '../components/services/Getters/GetCities';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Texto - option", () => {
    render(
        <BrowserRouter>
        <GetCities />
    </BrowserRouter>
    )
    let component = screen.getByRole('option', {name:/Selecciona la ciudad/i});
    expect(component).toBeInTheDocument();

})