<script setup lang="ts">
import type { HPImageArchive } from '~/types/bing/HPImageArchive'

const { data } = useFetch<HPImageArchive>('/bing/HPImageArchive.aspx', {
  query: {
    format: 'js',
    idx: 0,
    n: 1,
    mkt: 'zh-CN',
  },
})
</script>

<template>
  <div class="relative">
    <div
      class="flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `url(/bing${data?.images[0]?.url})`,
      }"
    ></div>
    <div class="absolute inset-0 dark:bg-black dark:bg-opacity-5"></div>
  </div>
</template>
