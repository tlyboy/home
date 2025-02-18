<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-[#3498db] dark:text-gray-200">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block"></div>
    </div>
    <slot />
    <div>
      <button class="btn m-3 mt-8 text-sm" @click="router.back()">返回</button>
    </div>
  </main>
</template>
