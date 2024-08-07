<template>
  <el-container
    class="layout-container text-gray-700 dark:text-gray-200"
    style="height: 100%"
  >
    <el-header>
      <div class="mx-auto flex h-full max-w-7xl items-center justify-between">
        <LogoLink />
        <NavBar />
      </div>
    </el-header>

    <el-main>
      <el-scrollbar>
        <slot />
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<style>
.layout-container .el-header {
  position: relative;
  border-bottom: 1px solid var(--el-color-info-light-7);
  color: var(--el-text-color-primary);
}

.layout-container .el-main {
  padding: 0;
}
</style>
