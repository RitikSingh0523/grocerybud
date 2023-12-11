import React, { useState } from 'react'

const Form = ({addItem,editItem}) => {
    const [newItem,setNewItem]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!newItem) return;
        addItem(newItem);
        setNewItem('');
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
            <input 
                type='text' 
                value={newItem} 
                onChange={(e)=>setNewItem(e.target.value)}
            />
            <button className='btn'>
                Add Item
            </button>
        </form>
    </section>
  )
}

export default Form