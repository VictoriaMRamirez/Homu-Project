import CardCategory from '../components/Cards/CardCategory';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';

test("p - Imagen de la categoría", () => {
    render(
        <BrowserRouter>
            <CardCategory />
        </BrowserRouter>
    );

    const component = screen.getByText(/Imagen de la categoría/i);
    
    expect(component).toBeInTheDocument();
})