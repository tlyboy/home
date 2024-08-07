<script setup lang="ts">
import type { Repos } from '~/types/github/repo'

defineProps<{
  repos: Repos
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center px-4 py-10">
    <h2 class="mb-10 text-2xl font-bold">我的应用程序</h2>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="repo in repos"
        :key="repo.id"
        class="flex w-[300px] cursor-default flex-col gap-2 rounded-lg border border-[--el-color-info-light-7] p-4 transition duration-300 hover:shadow-2xl hover:shadow-[#3498db]"
      >
        <h3 class="truncate font-bold">{{ repo.name }}</h3>
        <p class="truncate">{{ repo.description }}</p>
        <div class="flex justify-end gap-2 text-xl">
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
