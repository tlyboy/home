import { User } from '~~/types/user'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const res = await $fetch<User>(
    `https://api.github.com/users/${config.githubUserName}`,
  )

  return res
})
