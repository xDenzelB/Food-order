import React from 'react';

export default function OrderImages({ mainId, sideId, drinkId }) {
  return <div className='food'>
    <img className='main-img' src={`main-${mainId}.jpeg`} />
    <img className='side-img' src={`side-${sideId}.jpeg`} />
    <img className='drink-img' src={`drink-${drinkId}.jpeg`} />
  </div>;
}
