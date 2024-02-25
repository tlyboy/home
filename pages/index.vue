<script setup lang="ts">
import { appDescription } from '~/constants'

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <p>{{ appDescription }}</p>
  </div>
</template>
