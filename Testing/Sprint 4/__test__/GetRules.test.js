import React from 'react';
import ReactDOM from 'react-dom';
import GetRules from '../components/services/Getters/GetRules';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Texto - option", () => {
    render(
        <BrowserRouter>
        <GetRules />
    </BrowserRouter>
    )
    let component = screen.getByText(/Selecciona las regla/i);
    expect(component).toBeInTheDocument();

})