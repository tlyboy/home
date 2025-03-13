<script setup lang="ts">
const color = useColorMode()

function toggleDark(event: MouseEvent) {
  const isAppearanceTransition = !window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  if (
    !isAppearanceTransition ||
    typeof document.startViewTransition !== 'function'
  ) {
    color.preference = color.value === 'dark' ? 'light' : 'dark'
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  const transition = document.startViewTransition(async () => {
    color.preference = color.value === 'dark' ? 'light' : 'dark'
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: color.value === 'dark' ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement:
          color.value === 'dark'
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <button
    class="icon-btn i-carbon-sun dark:i-carbon-moon"
    title="切换深色模式"
    @click="toggleDark"
  ></button>
</template>
