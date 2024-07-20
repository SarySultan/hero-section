import React from 'react'

function footer() {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-logo">
        <img src="src/assets/logo.png" alt="Logo" />
      </div>
      <div className="footer-nav">
        <p className="footer-title">Navigation</p>
        <ul className="footer-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#basket">Basket</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <p className="footer-title">Contact Us</p>
        <p className="footer-contact-info">
          <strong>Phone:</strong> +972 592 802 900
        </p>
        <p className="footer-contact-info">
          <strong>Email:</strong> sary.sultan2004@gmail.com
        </p>
      </div>
    </div>
  </footer>
  )
}

export default footer