import React from 'react';

export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }
  return ( 
    <div className='diff-food'>
      <select onChange={handleChange}>
        <option value='1'>Rice</option>
        <option value='2'>Miso Soup</option>
        <option value='3'>Naan Bread</option>
      </select>
    </div>
  );
}
