<template>
  <section class="text-gray-700 dark:text-gray-200">
    <TheHeader />

    <main class="flex h-screen flex-col items-center justify-center">
      <slot />
    </main>

    <TheFooter />
  </section>
</template>
