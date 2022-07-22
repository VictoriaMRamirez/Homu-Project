import React from'react';
import ReactDOM from'react-dom';
import MyFavorites from '../components/User/MyFavorites';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';

test("p - Mis Favoritos", () => {
    render(
        <BrowserRouter>
            <MyFavorites />
        </BrowserRouter>
    );
    const component = screen.getByText(/Mis Favoritos/i);
    expect(component).toBeInTheDocument();
})