<script setup lang="ts">
const nuxtApp = useNuxtApp()

const { data: userRes } = useFetch('/api/user', {
  getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
})
// 仓库列表只在客户端获取，避免 SSR hydration 不匹配问题
const { data: repoRes } = useFetch('/api/user/repos', {
  server: false,
})
const { data: backgroundRes } = useFetch('/api/background', {
  getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
})

const config = useRuntimeConfig()

// Scroll state for header shadow
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

useHead({
  title: computed(() =>
    userRes.value?.name ? `${userRes.value?.name} 的首页` : '加载中...',
  ),
  link: [
    {
      rel: 'icon',
      href: computed(() => userRes.value?.avatar_url || ''),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Fixed Header with Glass Effect -->
    <header
      class="header-glass fixed top-0 left-0 right-0 z-50 h-16 px-5 transition-all duration-300"
      :class="{ 'header-scrolled': isScrolled }"
    >
      <section class="mx-auto flex h-full max-w-6xl items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-3 group">
          <img
            class="h-9 w-9 rounded-full ring-2 ring-(--color-border) transition-all group-hover:ring-(--color-primary)"
            :src="userRes?.avatar_url"
            alt="logo"
          />
          <span class="font-semibold text-(--color-text)" style="font-family: var(--font-heading)">
            {{ userRes?.name }} 的首页
          </span>
        </RouterLink>
        <nav class="flex items-center gap-1">
          <a
            class="nav-icon-btn"
            :href="`https://github.com/${userRes?.login}`"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <span class="i-carbon-logo-github text-xl"></span>
          </a>
          <DarkToggle />
        </nav>
      </section>
    </header>

    <main class="flex-1">
      <!-- Hero Section with Background -->
      <section class="relative pt-16">
        <!-- Background Image -->
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{
            backgroundImage: `url(${backgroundRes})`,
          }"
        ></div>
        <!-- Gradient Overlay -->
        <div class="hero-overlay absolute inset-0"></div>

        <!-- Hero Content -->
        <div class="relative z-10 flex min-h-[500px] items-center justify-center px-5 py-20">
          <div class="hero-content flex flex-col items-center text-center">
            <!-- Avatar -->
            <div class="mb-6">
              <img
                :src="userRes?.avatar_url"
                :alt="userRes?.name || 'Avatar'"
                class="h-32 w-32 rounded-full ring-4 ring-white/80 dark:ring-white/20 shadow-xl"
              />
            </div>

            <!-- Name -->
            <h1
              class="mb-3 text-4xl font-bold md:text-5xl"
              style="font-family: var(--font-heading)"
            >
              {{ userRes?.name }}
            </h1>

            <!-- Bio -->
            <p
              v-if="userRes?.bio"
              class="mb-6 max-w-md text-lg"
              style="color: var(--color-text-secondary)"
            >
              {{ userRes?.bio }}
            </p>

            <!-- Stats -->
            <div class="mb-8 flex flex-wrap items-center justify-center gap-6">
              <div v-if="userRes?.location" class="stats-badge text-zinc-700 dark:text-zinc-400">
                <span class="i-carbon-location text-base"></span>
                <span>{{ userRes?.location }}</span>
              </div>
              <div v-if="userRes?.public_repos" class="stats-badge text-zinc-700 dark:text-zinc-400">
                <span class="i-carbon-repo-source-code text-base"></span>
                <span>{{ userRes?.public_repos }} 仓库</span>
              </div>
              <div v-if="userRes?.followers" class="stats-badge text-zinc-700 dark:text-zinc-400">
                <span class="i-carbon-user-multiple text-base"></span>
                <span>{{ userRes?.followers }} 粉丝</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="px-5 py-16">
        <div class="mx-auto max-w-6xl">
          <h2 class="section-heading mb-10 text-center">
            我的项目
          </h2>

          <ClientOnly>
            <!-- Bento Grid -->
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <a
                v-for="(repo, index) in repoRes"
                :key="repo.id"
                :href="repo.html_url"
                target="_blank"
                rel="noopener noreferrer"
                class="project-card cursor-pointer"
                :class="index === 0 ? 'md:col-span-2 lg:col-span-1' : ''"
              >
                <!-- Card Header -->
                <div class="flex items-start justify-between gap-3">
                  <h3 class="project-card-title flex-1">{{ repo.name }}</h3>
                  <div class="flex items-center gap-3 shrink-0">
                    <span v-if="repo.stargazers_count" class="stats-badge">
                      <span class="i-carbon-star text-sm"></span>
                      {{ repo.stargazers_count }}
                    </span>
                    <span v-if="repo.forks_count" class="stats-badge">
                      <span class="i-carbon-fork text-sm"></span>
                      {{ repo.forks_count }}
                    </span>
                  </div>
                </div>

                <!-- Description -->
                <p class="project-card-description">
                  {{ repo.description || '暂无描述' }}
                </p>

                <!-- Footer -->
                <div class="mt-auto flex items-center justify-between pt-2">
                  <span v-if="repo.language" class="lang-tag">
                    {{ repo.language }}
                  </span>
                  <div v-else></div>
                  <div class="flex items-center gap-2">
                    <a
                      v-if="repo.homepage"
                      class="nav-icon-btn"
                      :href="repo.homepage"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="访问网站"
                      @click.stop
                    >
                      <span class="i-carbon-link text-lg"></span>
                    </a>
                  </div>
                </div>
              </a>
            </div>

            <!-- Skeleton fallback -->
            <template #fallback>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="i in 6" :key="i" class="project-card animate-pulse">
                  <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                  <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                  <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            </template>
          </ClientOnly>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-(--color-border) px-5 py-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <!-- Logo & Copyright -->
          <div class="flex items-center gap-3">
            <img
              v-if="userRes?.avatar_url"
              :src="userRes?.avatar_url"
              alt="logo"
              class="h-6 w-6 rounded-full"
            />
            <span style="color: var(--color-text-secondary)" class="text-sm">
              © {{ new Date().getFullYear() }} {{ userRes?.name }}
            </span>
          </div>

          <!-- ICP / License -->
          <div class="flex flex-wrap items-center justify-center gap-4 text-sm">
            <template v-if="config.public.icpNumber || config.public.policeNumber">
              <a
                v-if="config.public.icpNumber && config.public.icpLink"
                class="transition-colors hover:text-(--color-primary)"
                style="color: var(--color-text-secondary)"
                :href="config.public.icpLink || ''"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ config.public.icpNumber }}
              </a>

              <a
                v-if="config.public.policeNumber && config.public.policeLink"
                class="flex items-center gap-2 transition-colors hover:text-(--color-primary)"
                style="color: var(--color-text-secondary)"
                :href="config.public.policeLink || ''"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/beian.png"
                  :alt="config.public.policeNumber || ''"
                  class="w-4"
                />
                <span>{{ config.public.policeNumber }}</span>
              </a>
            </template>

            <template v-else>
              <span style="color: var(--color-text-secondary)">
                基于 MIT 许可发布
              </span>
            </template>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
