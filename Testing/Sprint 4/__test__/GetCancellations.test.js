import React from 'react';
import ReactDOM from 'react-dom';
import GetCancellations from '../components/services/Getters/GetCancellations';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Texto - option", () => {
    render(
        <BrowserRouter>
        <GetCancellations />
    </BrowserRouter>
    )
    let component = screen.getByText(/Selecciona las políticas de cancelación/i);
    expect(component).toBeInTheDocument();

})