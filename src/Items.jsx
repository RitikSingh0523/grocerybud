import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items,removeItem}) => {
    
  return (
    <div>
        <h2>Items</h2>
        {items.map((item)=>{
           return <SingleItem key={item.id} item={item} removeItem={removeItem}/>
        })}
        
    </div>
  )
}

export default Items