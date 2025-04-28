<script setup lang="ts">
import { useRoute } from 'vue-router';

 const route = useRoute()


 const { id } = route.params;


const {isLodading, isError, pokemon, errorMessage} = usePokemon(id);
</script>
<template>
    <h1 v-if="isLoading" >Loading...</h1>
  <div v-else-if="isError">
    {{ errorMessage }}
  </div>
  <div v-else-if='pokemon'>
    <h1>{{pokemon.name}}</h1>
    <div class="character-container" >
      <img :src="pokemon.frontSpirte" :alt="pokemon.name">


    </div>
  </div>
</template>


<style scope>
</style>