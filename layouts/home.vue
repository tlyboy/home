<template>
  <main
    flex="~ col" h-full items-center justify-center
    text="center gray-700 dark:gray-200"
  >
    <slot />
    <TNavBar mt-6 />
  </main>
  <TFooter />
</template>
