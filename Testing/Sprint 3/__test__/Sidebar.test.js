import React from'react';
import ReactDOM from'react-dom';
import Sidebar from '../components/Header/Sidebar/Sidebar';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';



test("Sidebar - nav-text-menu", () => {
    render(
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    );
    let navTextMenu = screen.getByText(/MENÚ/i);
    expect(navTextMenu).toBeInTheDocument();
})

