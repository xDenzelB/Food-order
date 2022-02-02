import React from 'react';
import Instructions from './Instructions';

export default function InstructionsList({ instructions }) {
  return ( 
    <section className='instructions-list'>
      <h2>Instructions: </h2>
      {
        instructions.map((instruction, i) => 
          <Instructions key={`${instruction}-${i}`} instruction={instruction} />)
      }

    </section>
  );
}
