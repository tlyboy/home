<script setup lang="ts">
const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>

<template>
  <input
    v-model="modelValue"
    v-bind="$attrs"
    type="text"
    class="w-[250px] rounded border border-gray-200 bg-transparent px-4 py-2 text-center outline-none active:outline-none dark:border-gray-700"
  />
</template>
