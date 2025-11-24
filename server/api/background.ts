import { Background } from '~~/types/background'

export default defineEventHandler(async () => {
  const res = await $fetch<Background>(
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

  const backgroundUrl = `https://www.bing.com${res.images[0].url}`

  return backgroundUrl
})
