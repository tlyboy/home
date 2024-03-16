<script setup lang="ts">
const { data } = useFetch('/api/bing/HPImageArchive', {
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
    class="flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `url(https://www.bing.com${data?.images[0]?.url})`,
    }"
  ></div>
</template>
