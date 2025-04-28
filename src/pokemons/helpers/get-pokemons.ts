import type { PokemonListResponse, Pokemon, PokemonsResponse } from '../interface'
import pokemonApi from '../api/pokemonApi'

import axios from 'axios'
// import { sleep } from "./sleep";

export const getPokemons = async (): Promise<Pokemon[]> => {
  // await sleep(2)

  // throw new Error('Error de prueba');
  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

  const pokemonPromises: Promise<Pokemon>[] = []
  for (const { url } of data.results) {
    const pokemonPromise = axios.get<PokemonsResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
      }
    })
    pokemonPromises.push(pokemonPromise)
  }
  const pokemons = await Promise.all(pokemonPromises)
  return pokemons
}
