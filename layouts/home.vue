<template>
  <main
    flex="~ col" h-full items-center justify-center
    text="center gray-700 dark:gray-200"
  >
    <slot />
    <NavBar mt-6 />
  </main>
  <TheFooter />
</template>
