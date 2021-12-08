import React, { useRef, useEffect, useState } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { ArwesThemeProvider, Button, StylesBaseline } from '@arwes/core';

import { Intro, Navbar, Book, Gallery, SinglePageBook, Error404, Header, Footer } from './components';
import { ToastContainer} from "react-toastify";
import { isMobile } from 'react-device-detect';


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

    const handleTransaction = () => {
    // Add some parameter to know if the transaction have been denied or fullfilled
        alert(`Your transaction have been parameter.`)
    // Also if we have more information about the error in the transaction we can display the error in the alert
    }

    if (!isMobile) {
        document.getElementById("body").className = "shrinked-body";
    }
    if (isMobile) {
        document.getElementById("body").className = "expanded-body";
    }

    return (
        <div>
            <div className='scanline'></div>
            <ToastContainer id='main-toast'/>
            {/* With the style on Intro.scss */}
            <BrowserRouter>
                {!isMobile &&
                    <Navbar setPage={ setPage } />
                }
                {/* <Intro all={ all } /> */}
                <div ref={ all } className='Main-Page'>
                        <ArwesThemeProvider themeSettings={ themeSettings }>
                            <StylesBaseline />
                            <Switch>
                                <Route exact path='/'>
                                    {isMobile &&
                                        <Header />
                                    }
                                    <Book page={ page } setPage={ setPage } />
                                    <Gallery />
                                    <Footer />
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
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
