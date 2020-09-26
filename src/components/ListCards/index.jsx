import React from 'react';

import './styles.css';

function ListCards({ data }) {
  return (
    <ul className="list-cards">
      {data?.map((pokemon) => (
        <li key={pokemon.name} className="card-sm">
          <img
            className="card-sm__image"
            src={pokemon.avatar}
            alt={pokemon.name}
          />
          <strong className="card-sm__name">{pokemon.name}</strong>
        </li>
      ))}
    </ul>
  );
}

export default ListCards;
