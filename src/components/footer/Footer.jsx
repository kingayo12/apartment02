// Footer.js
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./footer.css";
import Crimson from "../../assets/images/oaks-web.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-content'>
        <div className='footer-logo'>
          <img src={Crimson} alt='aa apartment' />
        </div>
        <div className='footer-nav'>
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#about'>About Us</a>
            </li>
            <li>
              <a href='#features'>Facilities</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='footer-quick-links'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href='/privacy-policy'>Privacy Policy</a>
            </li>
            <li>
              <a href='/terms-of-service'>Terms of Service</a>
            </li>
            <li>
              <a href='/#faq'>FAQ</a>
            </li>
          </ul>
        </div>
        <div className='footer-social-media'>
          <h3>Follow Us</h3>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='social-icon' /> Facebook
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaXTwitter className='social-icon' /> Twitter
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='social-icon' /> Instagram
          </a>
        </div>
        <div className='footer-contact'>
          <h3>Contact Information</h3>
          <p>
            <FaPhone className='contact-icon' /> +234 703 396 7980
          </p>
          <p>
            <FaEnvelope className='contact-icon' /> crimsonoaksng@gmail.com
          </p>
        </div>
        <div className='footer-subscribe'>
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type='email' placeholder='Enter your email' required />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </section>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Crimson OAKS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
