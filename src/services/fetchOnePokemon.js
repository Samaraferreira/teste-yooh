import {
  baseURL
} from './api';

export async function fetchOnePokemon(name) {
  try {
    const response = await fetch(`${baseURL}/pokemon/${name}`); // Buscando um pokemon por nome

    const responseJson = await response.json(); // Trasformando a resposta em JSON

    const pokemon = createObject(responseJson); // Passa a resposta para a função createObject que retorna um novo objeto

    return pokemon;
  } catch (err) {
    console.error('Failed retrieving information', err);
  }
}

function createObject(value) { // Retorna um objeto com a estrutura { name, avatar }
  return {
    name: value.name,
    avatar: `https://pokeres.bastionbot.org/images/pokemon/${value.id}.png`, // Gera o link da imagem
  };
}
