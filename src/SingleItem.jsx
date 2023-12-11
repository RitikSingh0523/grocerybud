import React, { useState } from 'react';

const SingleItem = ({ item, removeItem,editItem }) => {
  const { name, id, completed } = item;
  

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => editItem(id)}
        onClick={() => editItem(id)}
      />
      <p
        style={{
          textDecoration: completed && 'line-through',
          textTransform: 'capitalize',
        }}
      >
        {name}
      </p>
      <button
        className='rmbtn'
        type='button'
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
