import React, { useState, useEffect } from 'react'
import cardData from "../api/cards.json"

export default function Cards() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setCards(cardData)
    }, 1500);
  }, [])


  return (
    <div className='container grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4 '>
      {!cards.length && "Yükleniyor"}
      {cards && cards.map((card,index) => (
        <div key={index} className='bg-white p-14 rounded-lg shadow-md flex flex-col items-center text-center'>
          <img className='mb-6' src={card.image} alt={card.title} />
          <h6 className='text-primary-brand-color font-semibold text-lg'>{card.title}</h6>
          <p className='mt-2 text-sm text-gray-700'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}
