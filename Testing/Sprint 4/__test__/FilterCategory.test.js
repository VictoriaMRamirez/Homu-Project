import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import FilterCategory from '../components/Filters/FilterCategory';

test("h2 - Recomendaciones", () => {
    render(
        <BrowserRouter>
            <FilterCategory />
        </BrowserRouter>
    );
    const component = screen.getByText(/Recomendaciones/i);
    expect(component).toBeInTheDocument();
})