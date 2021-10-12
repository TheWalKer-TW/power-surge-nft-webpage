import React from 'react'

import { Navbar, Book, Roadmap, Team } from './components';

import { ArwesThemeProvider, StylesBaseline } from '@arwes/core';

import {Router, Route, Switch, Navlink} from 'react-router-dom'

let themeSettings = {};
const palette = {
    primary: { main: '#ff2b2b' },
    secondary: { main: '#c466dc' },
    neutral: { main: '#0f0000' },
    text: {
        root: '#630b0b',
        headings: '#ff2b2b',
        link: '#c466dc',
        linkHover: '#d491fa'
    }
};
// const palette = {
//     primary: { main: '#40ffce' },
//     secondary: { main: '#c466dc' },
//     neutral: { main: '#001711' },
//     text: {
//         root: '#35efaa',
//         headings: '#40ffce',
//         link: '#c466dc',
//         linkHover: '#d491fa'
//     }
// };
const outline = 2;
const shadow = { blur: 2 };
themeSettings = { palette, outline, shadow };



const App = () => {
    return (
        <div>
            <ArwesThemeProvider themeSettings={themeSettings}>
                <StylesBaseline />
                <Router>
                    <Switch>
                        <Navbar />
                        <Route path="/home">
                            <Book />
                        </Route>
                        <Route path="/roadmap">
                            <Roadmap />
                        </Route>
                        <Route path="/about">
                            <Team />
                        </Route>
                    </Switch>
                </Router>
            </ArwesThemeProvider>
        </div>
    )
}

export default App
