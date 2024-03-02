import nProgress from 'nprogress'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:loading:start', () => {
    nProgress.start()
  })

  nuxtApp.hook('page:loading:end', () => {
    nProgress.done()
  })
})
