import React from 'react';

const Summary = ({ name, weather, money, dream, onNextChange }) => {
  return (
    <section className='container'>
      <div className='background-transparent'>
        <h2>Those are some awesome choices {name}!</h2>
        <p>Thank you for taking the time to answer these questions.</p>
        <p>Here are your results:</p>
        <ul>
          <li>{weather}</li>
          <li>{money}</li>
          <li>{dream}</li>
        </ul>
      </div>
    </section>
  );
};

export default Summary;
