import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {

  function handleChange(e) {
    setDrinkId(e.target.value);
  }
  return (
    <div className='diff-food'>
      <select onChange={handleChange}>
        <option value='1'>Green Tea</option>
        <option value='2'>Sake</option>
        <option value='3'>Boba</option>
      </select>
    </div>
  
  );
}
