<script setup lang="ts">
const { data: userRes } = useFetch('/api/user')
const { data: repoRes } = useFetch('/api/repo')
const { data: backgroundRes } = useFetch('/api/background')

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
  <header class="h-[60px] bg-white px-[20px] dark:bg-black">
    <section class="mx-auto flex h-full max-w-7xl items-center justify-between">
      <RouterLink to="/" class="flex h-full items-center gap-4">
        <img class="h-8 rounded-full" :src="userRes?.avatar_url" alt="logo" />
        <span class="font-bold">{{ userRes?.name }} 的首页</span>
      </RouterLink>
      <nav class="flex justify-center gap-2 text-xl">
        <a
          class="icon-btn i-carbon-logo-github"
          :href="`https://github.com/${userRes?.login}`"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        ></a>

        <DarkToggle />
      </nav>
    </section>
  </header>

  <main>
    <div class="relative">
      <div
        class="flex h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat"
        :style="{
          backgroundImage: `url(${backgroundRes})`,
        }"
      ></div>
      <div class="absolute inset-0 dark:bg-black/5"></div>
    </div>

    <div class="flex flex-col items-center justify-center px-4">
      <h2 class="my-10 text-2xl font-bold">我的应用程序</h2>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="repo in repoRes"
          :key="repo.id"
          class="flex w-[300px] cursor-default flex-col gap-2 rounded-lg bg-white p-4 transition duration-300 hover:shadow-2xl hover:shadow-[#3498db] dark:bg-black"
        >
          <h3 class="truncate font-bold">{{ repo.name }}</h3>
          <p class="truncate">{{ repo.description }}</p>
          <div class="flex justify-end gap-2 text-xl">
            <a
              v-if="repo.homepage"
              class="icon-btn i-carbon-link"
              :href="repo.homepage"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              class="icon-btn i-carbon-logo-github"
              :href="repo.html_url"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="flex flex-col items-center gap-2 p-10">
    <p>基于 MIT 许可发布</p>
    <p>
      版权所有 © {{ new Date().getFullYear() }}-present {{ userRes?.name }}
    </p>
  </footer>
</template>
