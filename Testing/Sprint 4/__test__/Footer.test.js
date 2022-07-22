import Footer from '../components/Footer/Footer';
import {render,screen,act,fireEvent,cleanup} from '@testing-library/react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import React from'react';
import ReactDOM from'react-dom';
import '@testing-library/jest-dom';

test("Footer - fecha", () => {
    render(<Footer />);
    let footerInfo = screen.getByText(/2022/i);
    expect(footerInfo).toBeInTheDocument();
});

test("Footer - isologotipo", () => {
    render(<Footer />);
    let footerInfo = screen.getByText(/HOMU/i);
    expect(footerInfo).toBeInTheDocument();
})


