<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main flex="~ col" h-full items-center justify-center>
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
