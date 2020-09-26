import React from 'react';

import Card from './Card';

import './styles.css';

function ListCardLg({ pokemons }) {
  return (
    <ul className="list-cards-lg">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
}

export default ListCardLg;
