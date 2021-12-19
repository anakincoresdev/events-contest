<template>
  <div class="app-header">
    <nav class="app-header__nav container">
      <router-link
        :to="{ name: 'home' }"
        class="app-header__logo-link cursor-pointer flex items-center"
      >
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="8" r="8" fill="#0E0E0E"/>
          <rect x="18" y="7" width="2" height="7" transform="rotate(90 18 7)" fill="#EDEDED"/>
        </svg>
        <span class="app-header__logo-text">event-contest</span>
      </router-link>
      <router-link
        v-for="item of menu"
        tag="li"
        :key="item.routeName"
        :to="{name: item.routeName}"
        class="app-header__link"
      >
        {{ item.label }}
      </router-link>
      <app-button type="outlined">
        Голосовать
      </app-button>
    </nav>
    <h1 class="app-header__title">
      Рейтинг
    </h1>
    <h4 class="app-header__subtitle">
      лучших представителей event-сферы
    </h4>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue';

export default {
  name: 'AppHeader',
  components: {
    AppButton,
  },
  data() {
    return {
      menu: [
        { label: 'Победители', routeName: 'winners' },
        { label: 'Партнёры', routeName: 'partners' },
        { label: 'Участникам', routeName: 'for-participants' },
        { label: 'Информация', routeName: 'info' },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
  .app-header {
    padding: 80px 0 85px;
    height: 657px;

    &__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__link.router-link-active {
      color: #0E0E0E;
      text-decoration: underline;
    }

    &__link {
      color: #0E0E0E;
      text-decoration: none;
    }

    &__logo-text {
      margin-left: 8px;
    }

    &__logo-link {
      text-decoration: none;
      color: #0E0E0E;
    }

    &__title {
      font-size: 288px;
      margin: 150px 0 0;
      line-height: 0.8;
      font-weight: 100;
    }

    &__subtitle {
      font-weight: 100;
    }
  }
</style>
