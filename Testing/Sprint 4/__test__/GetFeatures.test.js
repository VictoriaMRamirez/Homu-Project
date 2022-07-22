import React from 'react';
import ReactDOM from 'react-dom';
import GetFeatures from '../components/services/Getters/GetFeatures';
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Texto - Características", () => {
    render(
        <BrowserRouter>
        <GetFeatures />
    </BrowserRouter>
    )
    let component = screen.getByText(/Características/i);
    expect(component).toBeInTheDocument();

})