import pokemonApi from '../api/pokemonApi'
import type { Pokemon, PokemonsResponse } from '../interface'

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<PokemonsResponse>(`/pokemon/${id}`)

  return {
    id: data.id,
    name: data.name,
    frontSprite: data.sprites.front_default,
  }
}
