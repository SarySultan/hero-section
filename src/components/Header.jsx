import React from 'react'

function Header() {
  return (
    <div className='header-container'>
        <div className="logo">
          <img src="src/assets/logo.png" alt="logo" />
          <h1 className="header-title">flower</h1>
        </div>
        <nav className="nav">
          <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#basket">Basket</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="social">
          <img src="src/assets/facebook.png" alt="facebook" />
          <img src="src/assets/instagram.png" alt="instagram" />
          <img src="src/assets/youtube.png" alt="youtube" />
          <img src="src/assets/linkedin-logo.png" alt="linkedin" />
        </div>
      </div>
    
  )
}

export default Header