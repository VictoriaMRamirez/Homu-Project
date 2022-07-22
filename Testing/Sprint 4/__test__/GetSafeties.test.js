import React from 'react';
import ReactDOM from 'react-dom';
import GetSafeties from '../components/services/Getters/GetSafeties';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Texto - option", () => {
    render(
        <BrowserRouter>
        <GetSafeties />
    </BrowserRouter>
    )
    let component = screen.getByText(/Selecciona la información sobre salud y seguridad/i);
    expect(component).toBeInTheDocument();

})