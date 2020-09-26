import React from 'react';

import './styles.css';

function Card({ pokemon }) {
  return (
    <li className="list-cards-lg__item">
      <h2 className="card-lg__name">{pokemon.name}</h2>

      <div className="card-lg__box">
        <img
          className="card-lg__image"
          src={pokemon.avatar}
          alt={pokemon.name}
        />
      </div>
    </li>
  );
}

export default Card;
