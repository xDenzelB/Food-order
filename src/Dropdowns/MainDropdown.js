import React from 'react';

export default function MainDropdown({ setMainId }) {

  function handleChange(e) {
    setMainId(e.target.value);
  }
  return (

    <div className='diff-food'>
      <select onChange={handleChange}>
        <option value='1'>Dimsum</option>
        <option value='2'>Curry</option>
        <option value='3'>Sashimi</option>
      </select>

    </div>
  );
}
