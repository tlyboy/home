<script setup lang="ts">
import type { Repos } from '~~/types/github/repo'

definePageMeta({
  layout: 'app-main',
})

const background = useImage()

const backgroundUrl = background('/img/background.jpg', {
  format: 'avif',
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
    <TheHero :background-image="`url(${backgroundUrl})`" />
    <TheRepo :repos="repos!" />
    <TheFooter />
  </div>
</template>
