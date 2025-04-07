import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'

function Problemsdiv() {
  return (
    <>
      <div>
          {
            list.map((card,index)=>(
                <Cards
                key={card.id || index}
                title={card.title}
                image={card.image}
                description={card.description}
                />
            ))
          }
      </div>
    </>
  )
}

export default Problemsdiv
