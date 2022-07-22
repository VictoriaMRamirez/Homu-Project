import React from'react';
import ReactDOM from'react-dom';
import MyFavoriteCard from '../components/User/MyFavoriteCard';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';

test("span - Ver en mapa", () => {
    render(
        <BrowserRouter>
            <MyFavoriteCard />
        </BrowserRouter>
    );
    const component = screen.getByText(/Ver en mapa/i);
    expect(component).toBeInTheDocument();
});

test("span - ...continuar leyendo", () => {
    render(
        <BrowserRouter>
            <MyFavoriteCard />
        </BrowserRouter>
    );
    const component = screen.getByText(/...continuar leyendo/i);
    expect(component).toBeInTheDocument();
});

test("button - event Ver más", () => {
    render(
        <BrowserRouter>
            <MyFavoriteCard />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Ver más/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("button - Ver más", () => {
    render(
        <BrowserRouter>
            <MyFavoriteCard />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Ver más/i });
    expect(component).toBeInTheDocument();
});