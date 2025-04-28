import {  computed, onMounted, ref } from "vue";
import { getPokemons } from "../helpers/get-pokemons";

const pokemons = ref<Pokemon[]>([])
const isLoading = ref(true);
import type { Pokemon } from "../interface";

export const usePokemon = () => {

    onMounted(async () =>{
        const data = await getPokemons();
        pokemons.value = data
        isLoading.value = false;
    })

    return{
        pokemons,
        isLoading,

        count: computed(() => pokemons.value.length),
        // count: pokemons.value.length
    }
}