<template>
  <main
    class="flex h-full flex-col items-center justify-center px-4 py-10 text-gray-700 dark:text-gray-200"
  >
    <slot />
    <NavBar class="mt-6" />
  </main>
  <TheFooter />
</template>
