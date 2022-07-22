import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import UploadImages from '../components/Admin/UploadImages';

test("legend Cargar imágenes", () => {
    render(
        <BrowserRouter>
            <UploadImages />
        </BrowserRouter>
    );

    const component = screen.getByText(/Cargar imágenes/i);
    expect(component).toBeInTheDocument();
});

test("button - Cargar imagenes", () => {
    render(
        <BrowserRouter>
            <UploadImages />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Cargar imagenes/i });
    expect(component).toBeInTheDocument();
});

test("button - event Cargar imagenes", () => {
    render(
        <BrowserRouter>
            <UploadImages />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', { name: /Cargar imagenes/i });
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
})