import nProgress from 'nprogress'

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.beforeEach((to, from, next) => {
    nProgress.start()

    next()
  })

  router.afterEach(() => {
    nProgress.done()
  })
})
