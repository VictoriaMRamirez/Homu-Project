import React from'react';
import ReactDOM from'react-dom';
import Home from '../components/Pages/Home';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';

let component = null;

beforeEach(() => {
    component = render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
    // console.log(prettyDOM(component.container));
    expect(component.container).toBeInTheDocument();
});

test("Home - divComponents", () => {
    let homeComponent = component.not.toMatch("Hola mundo");
    // console.log(prettyDOM(homeComponent));
    expect(homeComponent).toBeInTheDocument();
})

