import React from 'react'

function HeroSection() {
  return (
    <div className='hero'>
        <div className="hero-texts">
          <h2 className="hero-title">
            <span className='flower'>Flowers</span> are the ultimate symbol of <br></br>love, and the essence of a <span className='flower'>flower</span> <br></br> can never be captured <br></br>in words alone
          </h2>
          <p className="hero-paragraph">
            At <span className='flower'>flower</span>, we deliver beauty and joy with our expertly crafted floral arrangements.<br></br> Enjoy fresh, hand-selected blooms, personalized service, and same-day delivery<br></br> to make every occasion unforgettable.
          </p>
          <button className='atc-button'>Start Shopping</button>
        </div>
        <img src="src/assets/flower.svg" alt="flower" />
      </div>
  )
}

export default HeroSection