<template>
  <div class="wrapper">
    <TheSidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheSidebar from '~/components/TheSidebar.vue'

</script>

<style lang="scss" scoped>
  .wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
</style>
