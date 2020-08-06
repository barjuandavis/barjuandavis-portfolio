import React from 'react'
import Navbar from './nav/navbar'

import '../styles/index.scss'
import './styles/contents.scss'

export default (props) => (
    <>
    <Navbar />     
        <div className="contents">
            <section className="items">
            {props.children}
            </section>
        </div>  
    </>
)  