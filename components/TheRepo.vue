<script setup lang="ts">
import type { Repos } from '~/types/github/repo'

const { data } = useFetch<Repos>('/github/users/tlyboy/repos', {
  query: {
    sort: 'updated',
    per_page: 6,
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center px-4 py-10">
    <h2 class="mb-4 text-2xl font-bold">我的应用程序</h2>
    <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="repo in data"
        :key="repo.id"
        class="flex flex-col gap-2 rounded-lg border-2 border-gray-200 p-4 dark:border-black"
      >
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
          <h3 class="text-xl font-bold">{{ repo.name }}</h3>
        </a>
        <p>{{ repo.description }}</p>
        <a
          v-if="repo.homepage"
          :href="repo.homepage"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500"
          >{{ repo.homepage }}</a
        >
      </div>
    </div>
  </div>
</template>
