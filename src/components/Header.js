// Header.js
import React, { useEffect, useState } from 'react';
import artLogo from '../assets/art-logo.jpg';
import { FiPhone, FiMail, FiShoppingCart, FiUser } from 'react-icons/fi'; // Importing icons from react-icons library
import { Link, redirect, useLocation, useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isArtist, setIsArtist] = useState(false);
    const location = useLocation();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const user = JSON.parse(localStorage.getItem('user'));


    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        if (user) {
            setIsLoggedIn(true);
            setIsArtist(user.is_artist);
        }
    }, []);

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.profile-div')) {
            setIsMenuOpen(false); // Close the menu list
        }
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
            setIsMenuOpen(false);
            // alert("Logged out successfully"); 
            navigate('/');
            window.location.reload(); 
        }
    };
    return (
        <header className="header">
            <div className="logo"><img className="logo-img" src={artLogo} alt="Art Logo" /></div>
            <nav className="nav">
                <div className="contact-info-header">
                    <span className="contact-item"><FiPhone /> +918742736746</span>
                    <span className="contact-item"><FiMail /> artgallery@gmail.com</span>
                    {/* <span className="contact-item cart-icon" onClick={() => console.log("View Cart clicked")}>
                        <FiShoppingCart />
                    </span> */}
                </div>
                <ul className="nav-list">
                    <NavItem to="/" label="Home" />
                    <NavItem to="/aboutUs" label="About Us" />
                    {isArtist && <NavItem to="/uploadArt" label="Sell" />}
                    <NavItem to="/explore" label="Explore" />
                    <NavItem to="/shop" label="Shop" />
                    {isLoggedIn ? (
                        <div className='profile-div'>
                            <span className="contact-item" onClick={handleMenuToggle}>
                                <FiUser />
                            </span>
                            {isMenuOpen && (
                                <ul className="menu-list">
                                    <li style={{"fontWeight" : "500"}}>{user?.name}</li>
                                    <li>Profile</li>
                                    <li>Address</li>
                                    {isArtist ? (
                                        <>
                                            <li>
                                                <a href="/artist-dashboards" style={{
                                                    'textDecoration': 'none',
                                                    'color': 'black'
                                                }}>Dashboard</a>
                                            </li>

                                            <li>
                                                <a href="/received-orders" style={{
                                                    'textDecoration': 'none',
                                                    'color': 'black'
                                                }}>Received Orders</a>
                                            </li>
                                        </>
                                    ) :
                                        <li>
                                            <a href="/your-orders" style={{
                                                'textDecoration': 'none',
                                                'color': 'black'
                                            }}>Your Orders</a>
                                        </li>
                                    }
                                    <li onClick={handleLogout}>Logout</li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <NavItem to="/login" label="Login" />
                    )}
                </ul>
            </nav>
        </header>
    );

    function NavItem({ to, label }) {
        return (
            <li className={`nav-item ${location.pathname === to ? 'active' : ''}`}>
                <Link to={to}>{label}</Link>
            </li>
        );
    }
};

export default Header;
