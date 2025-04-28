<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePokemon } from '../composables/usePokemon'

const route = useRoute()

const { id } = route.params

const { isLoading, isError, pokemon, errorMessage } = usePokemon(id.toString())

console.log(pokemon)
console.log('!!')
</script>
<template>
  <h1 v-if="isLoading">Loading...</h1>
  <div v-else-if="isError">
    {{ errorMessage }}
  </div>
  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container">
      <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    </div>
  </div>
</template>

<style scope></style>
