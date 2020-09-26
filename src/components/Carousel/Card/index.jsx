import React from 'react';

import './styles.css';

function Card({ pokemon, ...rest }) {
  return (
    <li {...rest}>
      <h2 className="carousel-card__name">{pokemon.name}</h2>

      <div className="carousel-card__box">
        <img
          className="carousel-card__image"
          src={pokemon.avatar}
          alt={pokemon.name}
        />
      </div>
    </li>
  );
}

export default Card;
