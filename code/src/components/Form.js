import React, { useState } from 'react';

import WelcomePage from './WelcomePage';
import Name from './Name';
import Weather from './Weather';
import Money from './Money';
import Dream from './Dream';
import Summary from './Summary';

const Form = () => {
  const [name, setName] = useState('');
  const [weather, setWeather] = useState();
  const [money, setMoney] = useState('');
  const [dream, setDream] = useState('');
  const [next, setNext] = useState(1);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleWeatherChange = (weather) => {
    setWeather(weather);
  };

  const handleMoneyChange = (money) => {
    setMoney(money);
  };

  const handleDreamChange = (event) => {
    setDream(event.target.value);
  };

  const handleNextChange = () => {
    setNext(next + 1);
  };

  const handleBackChange = () => {
    setNext(next - 1);
  };

  return (
    <section>
      {next === 1 && <WelcomePage onNextChange={handleNextChange} />}

      {next === 2 && (
        <Name
          name={name}
          onInputChange={handleInputChange}
          onNextChange={handleNextChange}
          onBackChange={handleBackChange}
        />
      )}

      {next === 3 && (
        <Weather
          weather={weather}
          onWeatherChange={handleWeatherChange}
          onNextChange={handleNextChange}
          onBackChange={handleBackChange}
        />
      )}

      {next === 4 && (
        <Money
          money={money}
          onMoneyChange={handleMoneyChange}
          onNextChange={handleNextChange}
          onBackChange={handleBackChange}
        />
      )}

      {next === 5 && (
        <Dream
          dream={dream}
          onDreamChange={handleDreamChange}
          onNextChange={handleNextChange}
          onBackChange={handleBackChange}
        />
      )}

      {next === 6 && (
        <Summary
          name={name}
          weather={weather}
          money={money}
          dream={dream}
          onBackChange={handleBackChange}
        />
      )}
    </section>
  );
};

export default Form;
