import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemons'

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/by/:id`,
      props: { title: 'Pokemon Por ID', visible: false },
      name: 'Pokemon-id',
      component: () => import('@/pokemons/pages/PokemonById.vue'),
    },
    {
      path: `/${ROUTE_NAME}/list`,
      props: { title: 'Listado', visible: true },
      name: 'pokemon-list',

      component: () => import('@/pokemons/pages/PokemonList.vue'),
    },
    {
      path: `/${ROUTE_NAME}/list-Native`,
      props: { title: 'Listado Nativo', visible: true },
      name: 'pokemon-list-Native',

      component: () => import('@/pokemons/pages/PokemonListNative.vue'),
    },
    {
      path: `/${ROUTE_NAME}/search`,
      props: { title: 'Busqueda', visible: true },
      name: 'pokemon-search',

      component: () => import('@/pokemons/pages/PokemonSearch.vue'),
    },
  ],
}
