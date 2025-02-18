<script setup lang="ts">
import type { HPImageArchive } from '~/types/bing/hpImageArchive'
import type { Repos } from '~/types/github/repo'

definePageMeta({
  layout: 'app-main',
})

const { data: hpImageArchive } = useFetch<HPImageArchive>(
  'https://www.bing.com/HPImageArchive.aspx',
  {
    query: {
      format: 'js',
      idx: 0,
      n: 1,
      mkt: 'zh-CN',
    },
  },
)

const { data: repos } = useFetch<Repos>(
  'https://api.github.com/users/tlyboy/repos',
  {
    query: {
      sort: 'updated',
      per_page: 6,
    },
  },
)
</script>

<template>
  <div>
    <TheHero
      :background-image="`url(https://www.bing.com${hpImageArchive?.images[0]?.url})`"
    />
    <TheRepo :repos="repos!" />
    <TheFooter />
  </div>
</template>
