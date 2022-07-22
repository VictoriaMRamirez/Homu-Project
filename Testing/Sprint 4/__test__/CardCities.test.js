import CardCities from '../components/Cards/CardCities';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';


test("Contenido button", () => {
    render(
        <BrowserRouter>
            <CardCities />
        </BrowserRouter>
    );

    const component = screen.getByRole('combobox');
    
    expect(component).toBeInTheDocument();
})