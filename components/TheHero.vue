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
  <div
    class="flex h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `url(https://www.bing.com${data?.images[0]?.url})`,
    }"
  ></div>
</template>
