import React, { useState, useEffect, useRef } from 'react';
import FlipBook from 'react-pageflip';
import { isMobile } from 'react-device-detect';

import { SinglePageBook } from '../index';
import Pages from "../SinglePageBook/Pages"

import {init, handleMetaMask, mint} from "../Metamask/Metamask"
import "./Book.css"

const Book = ({ page, setPage }) => {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight * (0.975);

    let bookWidth = windowWidth / 2 - windowWidth / 20;
    let bookHeight = (6071 / 4299) * bookWidth;


    if (bookHeight > windowHeight) {
        bookHeight = windowHeight * 0.975;
        bookWidth = (4299 / 6071) * bookHeight;
    }

    const book = useRef();

    const [amountToMint, setAmountToMint] = useState("1");
    const [formVisibility, setFormVisibility] = useState(true);
    const [metaMaskConnected, setMetaMaskConnected] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Amount selected to mint: ${amountToMint}`)

        mint(amountToMint)();
    }

    const onFlip = (e) => {
        const currentPage = book.current.pageFlip().getCurrentPageIndex();
        currentPage !== 0 ? setFormVisibility(false) : setFormVisibility(true);
    }
    const onChangeState = (e) => {

        const currentState = e.data;
        const currentPage = book.current.pageFlip().getCurrentPageIndex();
        setPage(currentPage)

        currentPage !== 0 ? setFormVisibility(false) :
            currentState === "flipping" ? setFormVisibility(false) :
                currentState === "user_fold" ? setFormVisibility(false) :
                    setFormVisibility(true);

    }

    useEffect( () => {
        if(book.current.pageFlip()){
            book.current.pageFlip().flip(page);
            onFlip();
        };
    }, [page]);


    init(setMetaMaskConnected)()
    return (
        <section className="book-section" id="home">
            <div className='book-container'>
                <div className='form-container' style={{ visibility: formVisibility ? "visible" : "hidden" }}>
                    <div className='form-div'>
                        {!metaMaskConnected &&
                          <button
                              className="cybr-btn-book"
                              onClick={handleMetaMask(setMetaMaskConnected)}
                              >
                                  Connect<span aria-hidden>_</span>
                                  <span aria-hidden className="cybr-btn-book__glitch">MetaMask_</span>
                                  <span aria-hidden className="cybr-btn-book__tag">R25</span>
                          </button>
                        }
                        {
                          metaMaskConnected &&
                          <form className='mint-form' onSubmit={handleSubmit}>
                              <input
                                  type="number"
                                  min="1"
                                  max="20"
                                  id='mint-amount-counter'
                                  className='mint-amount-counter mint-form-item'
                                  name='amount_to_mint'
                                  value={amountToMint}
                                  onChange={(e) => {
                                      setAmountToMint(e.target.value)
                                  }}
                              />
                              <input type="submit" className='submit-amountToMint mint-form-item' value="Mint_" />
                          </form>
                        }
                    </div>
                </div>
                <FlipBook
                    width={bookWidth} height={bookHeight}
                    size='stretch'
                    minWidth={bookWidth} minHeight={bookHeight}
                    maxWidth={bookWidth} maxHeight={bookHeight}
                    usePortrait={false}
                    ref={book}
                    onFlip={onFlip}
                    onChangeState={onChangeState}
                    className={isMobile ? 'hidden' : null}
                >
                    <div className="page page1">
                        <div className="page-image-1_2-1_2 page1-panel-1"></div>
                        <div className="page-image-1_2-1_2 page1-panel-2"></div>
                    </div>
                    <div className="page page2">
                        <div className="page-image-1_1-1_1 page2-panel-1"></div>
                    </div>
                    <div className="page page3">
                        <div className="page-image-1_1-1_1 page3-panel-1"></div>
                    </div>
                    <div className="page page4">
                        <div className="page-image-1_1-1_1 page4-panel-1"></div>
                    </div>
                </FlipBook>
                {isMobile &&
                    Pages.pages.map( (page) => (
                    <p>lol</p>
                    // <section className='page-section' id={page.name}>
                    //     <img className='singlepagebook-page' src={page.image} alt={page.description} />
                    // </section>
                    ))
                }
            </div>
        </section>
    );
}

export default Book
