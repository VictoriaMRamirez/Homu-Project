import React from'react';
import ReactDOM from'react-dom';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';
import ButtonsHeaderSession from '../components/Header/Sidebar/ButtonsHeaderSession'
import { Container } from 'rsuite';


test("ButtonsHeaderSession - button", () => {
    render(
        <BrowserRouter>
            <ButtonsHeaderSession />
        </BrowserRouter>
    );
    const component = screen.getByRole('button');
    expect(component).toBeInTheDocument();
});

test(" button", () => {
    render(
        <BrowserRouter>
            <ButtonsHeaderSession />
        </BrowserRouter>
    );
    const component = screen.getByRole('button');

        fireEvent.click(component);

    expect(component).toBeInTheDocument();
})