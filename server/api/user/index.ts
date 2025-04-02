import { User } from '~~/types/user'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const res = await $fetch<User>(`https://api.github.com/user`, {
    headers: {
      Authorization: `Bearer ${config.githubToken}`,
    },
  })

  return res
})
