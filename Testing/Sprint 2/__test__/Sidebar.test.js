import React from'react';
import ReactDOM from'react-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';


let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
});

test("Sidebar - nav-text-menu", () => {
    let navTextMenu = component.getByText(/MENÚ/i);
    expect(navTextMenu).toBeInTheDocument();
});

test("Sidebar - name_user", () => {
    let nameUser = component.getByText(/¡Hola/i);
    expect(nameUser).toBeInTheDocument();
})

