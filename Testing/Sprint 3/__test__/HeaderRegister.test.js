import React from'react';
import ReactDOM from'react-dom';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderRegister from '../components/Header/HeaderRegister';



test("button - register", () => {
    render(
        <BrowserRouter>
            <HeaderRegister />
        </BrowserRouter>
    );

    const component = screen.getByRole('button', {name:/Inicia Sesion/i});
    
    fireEvent.click(component);
    expect(component).toBeInTheDocument();
});

test("button login password", () => {
    render(
        <BrowserRouter>
        <headerRegister />
    </BrowserRouter>
    )
    let loginPassword = screen.getByText(/Iniciar Sesión/i);
    expect(loginPassword).toBeInTheDocument();
})
