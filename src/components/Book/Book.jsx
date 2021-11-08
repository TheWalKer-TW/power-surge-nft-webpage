import React, { useState, useEffect, useRef } from 'react'
import FlipBook from 'react-pageflip';


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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Amount selected to mint: ${amountToMint}`)
    }

    const handleMetaMask = () => {
        console.log("Handle MetaMask Connection - Book")
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

    return (
        <section className="book-section" id="home">
            <div className='book-container'>
                <div className='form-container' style={{ visibility: formVisibility ? "visible" : "hidden" }}>
                    <div className='form-div'>
                        <button onClick={handleMetaMask}>
                            Connect_Wallet_
                        </button>
                        <form className='mint-form' onSubmit={handleSubmit}>
                            <input
                                type="number"
                                min="1"
                                max="20"
                                id='mint-amount-counter'
                                className='mint-amount-counter'
                                name='amount_to_mint'
                                value={amountToMint}
                                onChange={(e) => {
                                    setAmountToMint(e.target.value)
                                }}
                            />
                            <input type="submit" className='submit-amountToMint' value="Mint_" />
                        </form>
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
            </div>
        </section>
    );
}

export default Book
