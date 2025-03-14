<script setup lang="ts">
import { appName } from '~/constants'
</script>

<template>
  <RouterLink to="/" class="flex h-full items-center gap-4">
    <NuxtImg class="h-8" src="/img/logo.png" format="avif" alt="logo" />
    <span class="font-bold">{{ appName }}</span>
  </RouterLink>
</template>
