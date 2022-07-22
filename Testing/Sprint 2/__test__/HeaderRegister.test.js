import React from'react';
import ReactDOM from'react-dom';
import { prettyDOM } from '@testing-library/dom';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderRegister from '../components/Header/HeaderRegister';


let component = null;


beforeEach(() => {
    component = render(
        <BrowserRouter>
            <HeaderRegister />
        </BrowserRouter>
    )
    // console.log(prettyDOM(component.container));
    expect(component.container).toBeInTheDocument();
});

test("Contenido bloque izquierdo - lema", () => {
    let lema = component.getByText(/You are in the right place/i);
    // console.log(prettyDOM(lema));
    expect(lema).toBeInTheDocument();
})
