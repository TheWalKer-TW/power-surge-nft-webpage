import React, { useRef, useEffect, useState } from 'react'

import { Intro, Navbar, Book, Gallery } from './components';

import { ArwesThemeProvider, StylesBaseline } from '@arwes/core';

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

    const [page, setPage] = useState(0)

    const all = useRef(null)
        
    return (
        <div>
            <Intro all={ all } />
            <div ref={ all }>
                <ArwesThemeProvider themeSettings={ themeSettings }>
                    <Navbar changePage={ page => setPage(page) }/>
                    <Book page={ page }/>
                    <StylesBaseline />
                    <Gallery />
                </ArwesThemeProvider>
            </div>
        </div>
    )
}

export default App
