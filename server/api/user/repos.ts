import { Repos } from '~~/types/repo'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const res = await $fetch<Repos>(`https://api.github.com/user/repos`, {
    headers: {
      Authorization: `Bearer ${config.githubToken}`,
    },
    query: {
      sort: 'updated',
      per_page: 6,
    },
  })

  return res
})
