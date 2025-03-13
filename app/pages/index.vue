<script setup lang="ts">
import type { Repos } from '~~/types/github/repo'
import background from '~/assets/images/background.avif'

definePageMeta({
  layout: 'app-main',
})

const { data: repos } = useFetch<Repos>(
  'https://api.github.com/users/tlyboy/repos',
  {
    query: {
      sort: 'updated',
      per_page: 6,
    },
  },
)
</script>

<template>
  <div>
    <TheHero :background-image="`url(${background})`" />
    <TheRepo :repos="repos!" />
    <TheFooter />
  </div>
</template>
