import React, { useState } from 'react';

const SingleItem = ({ item, removeItem }) => {
  const { name, id, completed } = item;
  const [isChecked, setIsChecked] = useState(completed || false);

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textDecoration: isChecked && 'line-through',
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
