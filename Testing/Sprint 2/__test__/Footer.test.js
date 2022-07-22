import Footer from '../components/Footer/Footer';
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
            <Footer />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
});

test("Footer - fecha", () => {
    let footerInfo = component.getByText(/2022/i);
    expect(footerInfo).toBeInTheDocument();
});

test("Footer - isologotipo", () => {
    let footerInfo = component.getByText(/HOMU/i);
    expect(footerInfo).toBeInTheDocument();
})

