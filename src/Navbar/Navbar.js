import logo from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/banner-thumb.png'
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header class="header-section clearfix">
            <div class="container-fluid">
                <a href="a" class="site-logo">
                    <img alt="" />
                </a>
                <div class="responsive-bar"><i class="fa fa-bars"></i></div>
                <a href="/" class="user"><i class="fa fa-user"></i></a>
                <Link to="/signup" class="site-btn">Sign Up Free</Link>
                <nav class="main-menu">
                    <ul class="menu-list">
                        <li><Link to="/Prices">Prices</Link></li>

                        <li><Link to="/N">News</Link></li>
                        <li><Link to="/News">New Videos</Link></li>
                        <li><Link to="/Learn">Learn</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;