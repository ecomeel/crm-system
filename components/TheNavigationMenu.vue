<template>
  <nav class="navigation">
    <ul>
      <li>
        <NuxtLink
          v-for="menu, idx in menuList"
          :key="idx"
          class="navigation__item"
          :to="menu.url"
        >
          <Icon :name="menu.icon" />
          <p>{{ menu.name }}</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface IMenu {
  name: string;
  url: string;
  icon: string;
}
const menuList: IMenu[] = [
  {
    name: 'Home',
    icon: 'radix-icons:dashboard',
    url: '/'
  },
  {
    name: 'Products',
    icon: 'ep:goods',
    url: '/products'
  },
  {
    name: 'Payments',
    icon: 'ph:contactless-payment',
    url: 'payment'
  },
  {
    name: 'Orders',
    icon: 'fluent:receipt-28-regular',
    url: '/orders'
  },
  {
    name: 'Customers',
    icon: 'mingcute:group-line',
    url: '/customers'
  },
  {
    name: 'Feedback',
    icon: 'fluent:person-feedback-48-regular',
    url: '/feedback'
  },
  {
    name: 'Settings',
    icon: 'radix-icons:gear',
    url: '/settings'
  },
  {
    name: 'Help',
    icon: 'radix-icons:question-mark',
    url: '/help'
  }
]
</script>

<style scoped lang="scss">
.navigation {
  &__item {
    margin-bottom: 1.5vw;
    padding: .5vw;
    border-radius: .8vw;
    display: flex;
    align-items: center;
    column-gap: 10px;
    transition: background-color linear .2s;

    &:hover {
      background-color: $blue;
    }
  }
}
</style>
