<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(5)
const increase = () => {
  counter.value++
}

// import { defineComponent, ref } from 'vue'

// export default defineComponent({
//   setup() {
//     const counter = ref(5)

//     const increase = () => {
//       counter.value++
//     }

//     return {
//       counter,
//       increase,
//     }
//   },
// })
</script>

<template>
  <h1>Counte view: {{ counter }}</h1>

  <button @click="increase">+1</button>
</template>
