import React from 'react'
import FlipBook from 'react-pageflip';

import "./Book.css"

const Book = (props) => {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight * (1 - 0.2);


    let bookWidth = windowWidth/2 - windowWidth/6;
    let bookHeight = (6071 / 4299) * bookWidth;


    if (bookHeight > windowHeight) {
        bookHeight = windowHeight * 0.9;
        bookWidth = (4299/6071) * bookHeight;
    }
    
    return (
        <section className="book-container" >
            <FlipBook 
            width={bookWidth} height={bookHeight} 
            size='stretch'
            minWidth={bookWidth} minHeight={bookHeight}
            maxWidth={bookWidth} maxHeight={bookHeight} >
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
                    <h2 className="page-header">Page header 1</h2>
                    <div className="page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.</div>
                    <div className="page-footer">2</div>
                </div>
            </FlipBook>
        </section>
    );
}

export default Book
