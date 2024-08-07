<script setup lang="ts">
defineProps<{
  backgroundImage: string
}>()
</script>

<template>
  <div class="relative">
    <div
      class="flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage,
      }"
    ></div>
    <div class="absolute inset-0 dark:bg-black dark:bg-opacity-5"></div>
  </div>
</template>
