import {
  baseURL
} from './api';

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${baseURL}/${endpoint}`); // Faz a requisição a API

    const responseJson = await response.json(); // Trasformando a resposta em JSON

    const pokemonsArray = createObject(responseJson.results); // Passa a resposta para a função createObject que retorna um novo array

    return pokemonsArray;
  } catch (err) {
    console.error('Failed retrieving information', err);
  }
}

function createObject(values) { // Retorna um array de objetos com a estrutura { name, avatar }
  const newValues = values.map(function (item, index) {
    // Como na requisição de muitos pokemons a API não retorna o id deles, eu busquei os primeiros e incrementei o id pelo index
    const id = index + 1;

    return {
      name: item.name,
      avatar: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`, // Gera o link da imagem já que a API não retorna
    };
  });

  return newValues;
}
