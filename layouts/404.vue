<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center hex-3498db dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <slot />
    <div>
      <button text-sm btn m="3 t8" @click="router.back()">
        返回
      </button>
    </div>
  </main>
</template>
