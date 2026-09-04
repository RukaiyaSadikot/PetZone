import { FiChevronDown, FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from "react-icons/hi";

import logo from '../assets/images/logo.svg';

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="container justify-content-between align-items-center navbar-inner rounded-pill">
                <a href="#home" className="d-flex align-items-center gap-2 navbar-logo">
                    <img src={logo} alt="" />
                </a>

                <nav className="d-flex align-items-center gap-4">

                    
                    <div className="nav-item">
                        <a href="#" className="d-flex align-items-center gap-1">
                            Home
                            <FiChevronDown size={14} />
                        </a>
                        <div className="dropdown-menu">
                            <a href="#">Home 1</a>
                            <a href="#">Home 2</a>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="d-flex align-items-center gap-1">
                            Shop
                            <FiChevronDown size={14} />
                        </a>
                        <div className="dropdown-menu">
                            <a href="#">Shop Listing</a>
                            <a href="#">Shop Detail</a>
                            <a href="#">Cart</a>
                            <a href="#">Checkout</a>
                        </div>
                    </div>
                    
                    <div className="nav-item">
                        <a href="#" className="d-flex align-items-center gap-1">
                            Blog
                            <FiChevronDown size={14} />
                        </a>
                        <div className="dropdown-menu">
                            <a href="#">Blog Listing</a>
                            <a href="#">Blog Detail</a>
                        </div>
                    </div>
                    
                    <div className="nav-item">
                        <a href="#" className="d-flex align-items-center gap-1">
                            Services
                            <FiChevronDown size={14} />
                        </a>
                        <div className="dropdown-menu">
                            <a href="#">Service Listing</a>
                            <a href="#">Service Details</a>
                        </div>
                    </div>
                    
                    <div className="nav-item">
                        <a href="#" className="d-flex align-items-center gap-1">
                            Pages
                            <FiChevronDown size={14} />
                        </a>
                        <div className="dropdown-menu">
                            <a href="#">About</a>
                            <a href="#">FAQ</a>
                            <a href="#">Gallery</a>
                            <a href="#">Our Team</a>
                            <a href="#">Pricing Plan</a>
                        </div>
                    </div>
                    <a href="#" className='d-flex align-items gap-1'>
                        Contact Us
                    </a>


                </nav>

                <div className="d-flex align-items-center gap-2">
                    <button className="navbar-icon-btn" aria-label="Cart">
                        <HiOutlineShoppingBag size={25}/>
                    </button>
                    <button className="navbar-icon-btn" aria-label="Wishlist">
                        <FiHeart />
                        <span className="navbar-badge">0</span>
                    </button>
                </div>
            </div>
        </header>
    );
}