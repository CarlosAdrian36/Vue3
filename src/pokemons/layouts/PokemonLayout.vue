<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router'
import type { RouterLink } from '@/router/list-routes'

const routeLinks: RouterLink[] =
  pokemonRoute.children?.map(({ name, path, props }) => {
    // console.log({name});

    const { title, visible } = props as { title: string; visible: boolean }
    return {
      name: name?.toString() ?? '',
      path: path,
      title: title,
      visible: visible,
    }
  }) || []
</script>
<template>
  <div>
    <NavBar :links="routeLinks" is-secondary />
    <!-- <Suspense> -->
    <RouterView />
    <!-- <template #fallback>
        Loading...
      </template>

    </Suspense> -->
  </div>
</template>
¶
