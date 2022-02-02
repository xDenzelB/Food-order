import React from 'react';

export default function OrderImages({ mainId, sideId, drinkId }) {
  return <div className='food'>
    <img className='main-img' src={`main-${mainId}.jpg`} />
    <img className='side-img' src={`side-${sideId}.jpg`} />
    <img className='drink-img' src={`drink-${drinkId}.jpg`} />
  </div>;
}
