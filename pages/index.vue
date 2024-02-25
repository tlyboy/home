<script setup lang="ts">
import TheInput from '~/components/TheInput.vue'
import { appDescription } from '~/constants'

definePageMeta({
  layout: 'home',
})

const form = ref({
  wd: '',
})

const wdRef = ref<InstanceType<typeof TheInput> | null>(null)

onMounted(() => {
  wdRef.value?.focus()
})

function submitForm(e: Event) {
  e.preventDefault()

  window.open(`https://www.baidu.com/s?wd=${form.value.wd}`, '_blank')

  form.value = {
    wd: '',
  }
}
</script>

<template>
  <div>
    <p>{{ appDescription }}</p>

    <div py-4 />

    <form @submit="submitForm">
      <TheInput ref="wdRef" v-model="form.wd" placeholder="请输入" />

      <div>
        <button m-3 text-sm btn>
          确定
        </button>
      </div>
    </form>
  </div>
</template>
