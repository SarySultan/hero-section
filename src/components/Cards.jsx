import React from 'react'

function Cards({product}) {
  return (
    <div className="card">
      <img src={product.imageSrc} alt={product.altText} />
      <p className="card-title">{product.title}</p>
      <p className="card-description">{product.description}</p>
    </div>
  )
}

export default Cards







