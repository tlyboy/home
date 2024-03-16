import { HPImageArchiveType } from '~/types/bing/HPImageArchive'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const data = await $fetch<HPImageArchiveType>(
    'https://www.bing.com/HPImageArchive.aspx',
    {
      query,
    },
  )

  return data
})
