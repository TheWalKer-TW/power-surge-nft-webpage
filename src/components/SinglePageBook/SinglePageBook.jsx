import React from 'react'
import { useParams } from 'react-router-dom'

import Error404 from "../Error404/Error404"

import Pages from "./Pages"
import "./SinglePageBook.css"

const SinglePageBook = () => {
    const { section } = useParams();

    const sectionIndex = Pages.pages.findIndex( (page) => (page.name == section) );
    const data = Pages.pages[sectionIndex];

    if (sectionIndex == -1 && section) return <Error404 />

    return (
        <div className='singlepagebook-container'>
            {!section && 
                Pages.pages.map( (page) => (
                    <section className='page-section' id={page.name}>
                        <img className='singlepagebook-page' src={page.image} alt={page.description} />
                    </section>
                ))
            }
            {section && <section className='page-section single-page-section' id={data.name}>
                <img className='singlepagebook-page' src={data.image} alt={data.description} />
            </section>}
        </div>
    )
}

export default SinglePageBook
