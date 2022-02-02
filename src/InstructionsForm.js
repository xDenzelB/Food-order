import React from 'react';
import { useState } from 'react';

export default function InstructionsForm({ setInstructions, instructions }) {
  const [instructionsInput, setInstructionsInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionsInput]);

    setInstructionsInput('');
  }
  return ( 
    <section className='buttons'>
      <form onSubmit={handleSubmit}>
        <input value={instructionsInput} onChange={e => setInstructionsInput(e.target.value)} />
        <button>Submit</button>
      </form>

    </section>
  );
}
