import React, { useEffect } from 'react'
import FlipBook from 'react-pageflip';


import "./Book.css"

const Book = (props) => {

    // const book = useRef();
    // useEffect(() => {
    //     this.pageFlip.getPageFlip().turnToPage(props.page);
    // });

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight * (1 - 0.2);


    let bookWidth = windowWidth/2 - windowWidth/6;
    let bookHeight = (6071 / 4299) * bookWidth;


    if (bookHeight > windowHeight) {
        bookHeight = windowHeight * 0.9;
        bookWidth = (4299/6071) * bookHeight;
    }
    
    return (
        <section className="book-container" id="home">
            <FlipBook 
            width={bookWidth} height={bookHeight} 
            size='stretch'
            minWidth={bookWidth} minHeight={bookHeight}
            maxWidth={bookWidth} maxHeight={bookHeight}
            // ref={book}
            // ref={(el) => (this.flipBook = el)}
            >
                <div className="page page0">
                    <div className="page-image-1_1-1_1 page0-panel-1"></div>
                </div>
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
                <div className="page page5">
                    <div className="page-image-1_1-1_1 page0-panel-1"></div>
                </div>
            </FlipBook>
        </section>
    );
}

export default Book
