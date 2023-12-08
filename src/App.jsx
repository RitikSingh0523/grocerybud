import React, { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import Items from './Items'

const App = () => {
  const [items,setItems]=useState([])
  const addItem=(itemName)=>{
    const newItem={
      name:itemName,
      completedd:false,
      id: nanoid(),
    }
    setItems([...items, newItem]);
  };
  const removeItem=(itemId)=>{
    const newItems = items.filter((item)=>item.id !== itemId);
    setItems(newItems);

  };
  return (
    <div className='main-div'>
      <section className='center-div'>
        <Form addItem={addItem}/>
        <Items items={items} removeItem={removeItem}/>
      </section>
    </div>
  )
}

export default App