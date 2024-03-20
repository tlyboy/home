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
    <h2 class="mb-10 text-2xl font-bold">我的应用程序</h2>
    <div class="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="repo in data"
        :key="repo.id"
        class="flex flex-col gap-2 rounded-lg border-2 border-gray-200 p-4 dark:border-gray-700"
      >
        <h3 class="font-bold">{{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <div class="flex justify-end gap-2">
          <a
            v-if="repo.homepage"
            class="icon-btn i-carbon-link"
            :href="repo.homepage"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            class="icon-btn i-carbon-logo-github"
            :href="repo.html_url"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
