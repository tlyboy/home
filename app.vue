<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
