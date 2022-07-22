import CardCategory from '../components/Cards/CardCategory';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import { prettyDOM } from '@testing-library/dom';


test("Card Category - img", () => {
    render(
        <BrowserRouter>
            <CardCategory/>
        </BrowserRouter>
    );
    const component = screen.getByRole('img', {name: /bed and breakfast/i});
    expect(component).toBeInTheDocument();
});

test("Card Category - p", () => {
    render(
        <BrowserRouter>
            <CardCategory/>
        </BrowserRouter>
    );
    const component = screen.getByText('Hostel');
    expect(component).toBeInTheDocument();
})

