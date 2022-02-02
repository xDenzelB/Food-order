import React from 'react';

export default function OrderNameInput({ setOrderName }) {

  function handleChange(e) {
    setOrderName(e.target.value);
  }
  return (

    <section>
        Whats Your Order Name?

      <input onChange={handleChange} />
    </section>
  );
}
