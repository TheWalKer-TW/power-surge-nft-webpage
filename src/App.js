import React, { useRef, useEffect, useState } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { ArwesThemeProvider, StylesBaseline } from '@arwes/core';

import { Intro, Navbar, Book, Gallery, SinglePageBook, Error404 } from './components';


let themeSettings = {};
const palette = {
    primary: { main: '#ff2b2b' },
    secondary: { main: '#eb3d3d' },
    neutral: { main: '#0f0000' },
    text: {
        root: '#630b0b',
        headings: '#ff2b2b',
        link: '#630b0b',
        linkHover: '#a32222'
    }
};
const outline = 2;
const shadow = { blur: 2 };
themeSettings = { palette, outline, shadow };

const App = () => {

    const all = useRef(null)

    const [page, setPage] = useState("0")
        
    return (
        <div>
            <div className='scanline'></div>
            {/* With the style on Intro.scss */}
            <Navbar setPage={ setPage } />
            {/* <Intro all={ all } /> */}
            <div ref={ all }>
                <BrowserRouter>
                    <ArwesThemeProvider themeSettings={ themeSettings }>
                        <StylesBaseline />
                        <Switch>
                            <Route exact path='/'>
                                <Book page={ page } setPage={ setPage } />
                                <Gallery />
                            </Route>
                            <Route exact path='/manga'>
                                <SinglePageBook />
                            </Route>
                            <Route exact path="/manga/:section">
                                <SinglePageBook />
                            </Route>
                            <Route path="*">
                                <Error404 />
                            </Route>
                        </Switch>
                    </ArwesThemeProvider>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
