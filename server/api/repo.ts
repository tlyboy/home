import { Repos } from '~~/types/repo'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const res = await $fetch<Repos>(
    `https://api.github.com/users/${config.githubUserName}/repos`,
    {
      query: {
        sort: 'updated',
        per_page: 6,
      },
    },
  )

  return res
})
