<script setup lang="ts">
import { appName } from '~/constants'
</script>

<template>
  <RouterLink to="/" class="flex h-full items-center gap-4">
    <img class="h-8" src="~/assets/images/logo.png" alt="logo" />
    <span class="font-bold">{{ appName }}</span>
  </RouterLink>
</template>
