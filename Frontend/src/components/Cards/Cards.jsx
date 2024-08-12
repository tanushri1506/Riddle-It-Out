import React from 'react'
import './Cards.css'

const Cards = ({text, flipped }) => {
   
  return (
    <div className={`cards ${flipped ? 'flipped' : ''}`}>
    <div className="card-front">
      <h2>?</h2>
      <p>{text}</p>
    </div>
    <div className="card-back">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Cards
