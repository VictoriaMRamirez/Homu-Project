import CardProduct from '../components/Cards/CardProduct';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import { prettyDOM } from '@testing-library/dom';


test("Card Product - img1", () => {
    render(
        <BrowserRouter>
            <CardProduct/>
        </BrowserRouter>
    );
    const component = screen.getByRole('img', {name: /Navi Hostel/i});
    expect(component).toBeInTheDocument();
});

test("Card Product - img2", () => {
    render(
        <BrowserRouter>
            <CardProduct/>
        </BrowserRouter>
    );
    const component = screen.getByRole('img', {name: /Kamui Hostel/i});
    expect(component).toBeInTheDocument();
});

test("Card Category - p1", () => {
    render(
        <BrowserRouter>
            <CardProduct/>
        </BrowserRouter>
    );
    const component = screen.getByText('7');
    expect(component).toBeInTheDocument();
});

test("Card Category - p2", () => {
    render(
        <BrowserRouter>
            <CardProduct/>
        </BrowserRouter>
    );
    const component = screen.getByText('Navi Hostel');
    expect(component).toBeInTheDocument();
});

test("Card Category - p3", () => {
    render(
        <BrowserRouter>
            <CardProduct/>
        </BrowserRouter>
    );
    const component = screen.getByText('MOSTRAR EN MAPA');
    expect(component).toBeInTheDocument();
});

test("Card Product - link", () => {
    render(
        <BrowserRouter>
            <CardProduct/>
        </BrowserRouter>
    );
    const component = screen.getByRole('button', {name:/Ver más/i});
    expect(component).toBeInTheDocument();
})