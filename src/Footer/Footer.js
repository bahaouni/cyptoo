import React from 'react';
import logo from '../img/logo.png';
import appstore from '../img/appstore.png';
import playstore from '../img/playstore.png';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row spad">
          <div className="col-md-6 col-lg-3 footer-widget">
            <img src={logo} className="mb-4" alt="Logo"/>
            <pre>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.< br/>
<span>&copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a></span>
            </pre> </div>
          <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
            <h5 className="widget-title">Resources</h5>
            <ul>
              <li><a href="#">How to Buy Coin</a></li>
              <li><a href="#">Coin Overview</a></li>
              <li><a href="#">Blog News</a></li>
              <li><a href="#">How to Sell Coin</a></li>
              <li><a href="#">Purchase Theme</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
            <h5 className="widget-title">Quick Links</h5>
            <ul>
              <li><a href="#">Network Stats</a></li>
              <li><a href="#">Block Explorers</a></li>
              <li><a href="#">Governance</a></li>
              <li><a href="#">Exchange Markets</a></li>
              <li><a href="#">Get Theme</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
            <h5 className="widget-title">Follow Us</h5>
            <div className="social-men">
              <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
              <a href="" className="google"><i className="fa fa-google"></i></a>
              <a href="" className="instagram"><i className="fa fa-instagram"></i></a>
              <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
              <a href=""><img src={appstore} alt="App Store"/></a>
              <a href=""><img src={playstore} alt="Play Store"/></a>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
              <ul className="footer-nav">
                <li><a href="">DPA</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Privacy Policy </a></li>
                <li><a href="">support@company.com</a></li>
                <li><a href="">(123) 456-7890</a></li>
                </ul>
				</div>
				</div>
			</div>
		</div>
        </footer>)}


export default Footer;

