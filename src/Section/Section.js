import React from 'react'
import wa from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/about-img.png';
import './Section.css'
import { Link } from 'react-router-dom';
const Section = () => {
    return (
        <div>
            <section class="aboutc">

                <div class="container">

                    <div class="row">
                        <div class="a">
                            <h2 className='tit'>What is Bitcoin</h2>
                            <h5 className='hhh'>Bitcoin is an innovative payment network and a new kind of money.</h5>
                            <p className='hhhh'>Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
                            <Link to="/signup" class="site-btn sb-gradients " >Get Started</Link>
                        </div>

                    </div>


                    <div className="imgg">
                        <img src={wa} alt="" />

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Section;