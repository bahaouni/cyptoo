import React from 'react'
import './Lakta.css'
import { Link } from 'react-router-dom'


import im from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/banner-thumb.png'

const Lakta = () => {
    return (
        <div>
            <div class="landing">
                <div class="container">
                    <div class="text">
                        <h1>Welcome, To Cypto</h1>
                        <div className="events">
                            <p>Welcome to our website dedicated to the latest news and insights on the world of cryptocurrency. We provide up-to-date coverage on all major cryptocurrencies</p>
                            <form class="subscribe">
                                <input type="text" placeholder="Enter your email" />
                                <Link to="/signup" > <button class="site-btn sb-gradients">Get Started</button></Link>

                            </form>
                        </div>
                    </div>
                    <div class="image">
                        <img src={im} alt="" />
                    </div>
                </div>
                <Link to="/News" class="go-down">
                    <button class="site-btn sb-gradients" >News </ button >
                </Link>
                <div className="wrapper">

                    <div ><span className="dot"></span></div>



                    <div ><span className="dot"></span></div>
                    <div ><span className="dot"></span></div>
                    <div ><span className="dot"></span></div>


                    <div ><span className="dot"></span></div>
                    <div ><span className="dot"></span></div>


                </div>

            </div>
        </div>
    )
}

export default Lakta