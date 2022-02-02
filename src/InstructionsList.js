import React from 'react';
import Instructions from './Instructions';

export default function InstructionsList({ instructions }) {
  return ( 
    <section>
      <h2>Instructions: </h2>
      {
        instructions.map((instruction, i) => 
          <Instructions key={`${instructions}-${i}`} instruction={instructions} />)
      }

    </section>
  );
}