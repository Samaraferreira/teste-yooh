import React, { useEffect, useState } from 'react';

import { fetchData } from '../../services/fetchData';
import { fetchOnePokemon } from '../../services/fetchOnePokemon';

import CardInfo from '../../components/CardInfo';
import Carousel from '../../components/Carousel';
import ListCards from '../../components/ListCards';
import ListCardsLg from '../../components/ListCardsLg';

import './styles.css';

function Content() {
  const [data, setData] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const response = await fetchData('pokemon?limit=6'); // Buscando os 6 primeiros pokemons

      setData(response);
    }

    loadPokemons();
  }, []);

  useEffect(() => {
    async function loadNewPokemons() {
      // Resolve todas as requições a API ao mesmo tempo
      Promise.all([
        fetchOnePokemon('pikachu'),
        fetchOnePokemon('arcanine'),
        fetchOnePokemon('blaziken'),
        fetchOnePokemon('charizard'),
      ]).then((values) => {
        setPokemons(values); // Salva os dados
      });
    }

    loadNewPokemons();
  }, []);

  return (
    <main className="container">
      <section className="section-cards">
        <h2 className="section-cards__title">Últimos pokemons</h2>
        <ListCards data={data} />
      </section>

      <section className="section-infos">
        <Carousel pokemons={pokemons} />
        <ListCardsLg pokemons={pokemons} />
        <CardInfo />
      </section>
    </main>
  );
}

export default Content;
