import Categories from '../components/Cards/Categories';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';

let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Categories />
        </BrowserRouter>
    )

    expect(component.container).toBeInTheDocument();
});

test("Categorias - container", () => {
    let categoriaContainer = component.getByText(/Buscar por tipo de alojamiento/i);

    expect(categoriaContainer).toBeInTheDocument();
})


