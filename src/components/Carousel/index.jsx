import React, { useState, useCallback } from 'react';

import Card from './Card';

import arrowLeftIcon from '../../assets/arrow-left.svg';
import arrowRightIcon from '../../assets/arrow-right.svg';

import './styles.css';

function Carousel({ pokemons }) {
  const [active, setActive] = useState(0);

  function nextCard() {
    if (active < 3) setActive((value) => value + 1);
    else setActive(0);
  }

  function prevCard() {
    if (active !== 0) setActive((value) => value - 1);
    else return;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button onClick={prevCard} className="carousel-controls__button">
          <img src={arrowLeftIcon} alt="" />
        </button>
        <button onClick={nextCard} className="carousel-controls__button">
          <img src={arrowRightIcon} alt="" />
        </button>
      </div>

      <ul className="carousel">
        {pokemons?.map((pokemon, index) => (
          <Card
            key={pokemon.name}
            className={`carousel__item ${active === index && 'active'}`}
            pokemon={pokemon}
          />
        ))}
      </ul>

      <div className="carousel-indicators">
        <span
          className={`carousel-indicators__circle ${
            active === 0 && 'active-indicator'
          }`}
        />
        <span
          className={`carousel-indicators__circle ${
            active === 1 && 'active-indicator'
          }`}
        />
        <span
          className={`carousel-indicators__circle ${
            active === 2 && 'active-indicator'
          }`}
        />
        <span
          className={`carousel-indicators__circle ${
            active === 3 && 'active-indicator'
          }`}
        />
      </div>
    </div>
  );
}

export default Carousel;
