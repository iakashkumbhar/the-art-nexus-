// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-con'>
                <div className="newsletter">
                    <h3>JOIN OUR NEWSLETTER</h3>
                    <p>Sign up to receive awesome content</p>
                    <input type="email" placeholder="Your email address" />
                    <button>Subscribe</button>
                </div>
                <div className="categories">
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li>Artists</li>
                        <li>Paintings</li>
                        <li>Sculpture</li>
                        <li>Print</li>
                        <li>Traditional Arts</li>
                    </ul>
                </div>
                <div className="useful-links">
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Return Policy</li>
                        <li>Term and Condition</li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h3>CONTACT INFO</h3>
                    <p>70218 31385</p>
                    <p>info@artsgallery.com</p>
                    <p>Arts Gallery, 12, powai vihar complex, Senapati Bapat Marg, Mumbai - 400 013, India.</p>
                    <div className="social-media">
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div >
                <p className='footer-policy'>&copy; 2024 Your Company. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
