import CardProduct from '../components/Cards/CardProduct';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';

test(" button - Ver más", () => {
    render(
        <BrowserRouter>
            <CardProduct />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Ver más/i });
    expect(component).toBeInTheDocument();
});

test("button - event Ver más", () => {
    render(
        <BrowserRouter>
            <CardProduct />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Ver más/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
})