<script setup lang="ts">
import type { HPImageArchive } from '~/types/bing/HPImageArchive'
import type { Repos } from '~/types/github/repo'

definePageMeta({
  layout: 'app-main',
})

const { data: HPImageArchiveRes } = useFetch<HPImageArchive>(
  '/bing/HPImageArchive.aspx',
  {
    query: {
      format: 'js',
      idx: 0,
      n: 1,
      mkt: 'zh-CN',
    },
  },
)

const { data: repos } = useFetch<Repos>('/github/users/tlyboy/repos', {
  query: {
    sort: 'updated',
    per_page: 6,
  },
})
</script>

<template>
  <div>
    <TheHero
      :background-image="`url(/bing${HPImageArchiveRes?.images[0]?.url})`"
    />
    <TheRepo :repos="repos!" />
    <TheFooter />
  </div>
</template>
