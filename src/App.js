import React from 'react'

import { Navbar, Book, Roadmap, Team } from './components';

import { ArwesThemeProvider, StylesBaseline } from '@arwes/core';

let themeSettings = {};
const palette = {
    primary: { main: '#ff4090' },
    secondary: { main: '#c466dc' },
    neutral: { main: '#001711' },
    text: {
        root: '#35efaa',
        headings: '#40ffce',
        link: '#c466dc',
        linkHover: '#d491fa'
    }
};
const fontScale = 0.5;
const space = 8;
const outline = 2;
const shadow = { blur: 2 };
themeSettings = { palette, fontScale, space, outline, shadow };



const App = () => {
    return (
        <div>
            <ArwesThemeProvider themeSettings={themeSettings}>
                <StylesBaseline />
                <Navbar />
                <Book />
                <Roadmap />
                <Team />
            </ArwesThemeProvider>
        </div>
    )
}

export default App
