<template>
  <aside class="sidebar">
    <NuxtLink class="sidebar__logo" to="/">
      <img alt="logo" src="/logo.svg">
    </NuxtLink>
    <button class="sidebar__login">
      <Icon
        class="sidebar__login--icon"
        name="line-md:log-out"
        size="20px"
      />
    </button>
    <TheNavigationMenu class="sidebar__navigation" />
  </aside>
</template>

<script setup lang="ts">
import TheNavigationMenu from '@/components/TheNavigationMenu.vue'
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 2.5vw 1.5vw 2vw 1.5vw;
  position: relative;
  background-color: $dark-gray;
  &__logo {
    img {
      margin: 0 auto;
      width: 75%;
    }
  }
  &__login {
    position: absolute;
    top: 0.5vw;
    right: .8vw;
    background-color: transparent;
    transition: color linear .1s;

    &:hover {
      color: $blue;
    }
    &--icon {
      width: 20px;
    }
  }
  &__navigation {
    margin-top: 3vw;
  }
}
</style>
