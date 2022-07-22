import React from'react';
import ReactDOM from'react-dom';
import MyFavouritesEmpty from '../components/User/MyFavouritesEmpty';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';

test("p - Aún no tienes favoritos", () => {
    render(
        <BrowserRouter>
            <MyFavouritesEmpty />
        </BrowserRouter>
    );

    const component = screen.getByText(/Aún no tienes favoritos/i);
    expect(component).toBeInTheDocument();
});

test("button - Volver al inicio", () => {
    render(
        <BrowserRouter>
           <MyFavouritesEmpty />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Volver al inicio/i });
    expect(component).toBeInTheDocument();
});

test("button - event Volver al inicio", () => {
    render(
        <BrowserRouter>
            <MyFavouritesEmpty />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Volver al inicio/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
})