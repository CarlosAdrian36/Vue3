import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemons'

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/by/:id`,
      props: { title: 'Pokemon Por ID' },
      name: 'Pokemon-id',
      component: () => import('@/pokemons/pages/PokemonById.vue'),
    },
    {
      path: `/${ROUTE_NAME}/list`,
      props: { title: 'Listado' },
      name: 'pokemon-list',

      component: () => import('@/pokemons/pages/PokemonList.vue'),
    },
    {
      path: `/${ROUTE_NAME}/search`,
      props: { title: 'Busqueda' },
      name: 'pokemon-search',

      component: () => import('@/pokemons/pages/PokemonSearch.vue'),
    },
  ],
}
