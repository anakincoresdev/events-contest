<template>
  <div class="app-footer">
    <div class="container">
      <div class="app-footer__top">
        <h2 class="app-footer__title">
          Контакты
        </h2>
        <div class="app-footer__block">
          <div class="app-footer__block-name">Страницы</div>
          <div class="column app-footer__block-items">
            <router-link
              :to="{name: 'home'}"
              class="app-footer__block-item"
            >Главная</router-link>
            <router-link
              :to="{name: 'winners'}"
              class="app-footer__block-item"
            >Победители</router-link>
            <router-link
              :to="{name: 'partners'}"
              class="app-footer__block-item"
            >Партнеры</router-link>
            <router-link
              :to="{name: 'for-participants'}"
              class="app-footer__block-item"
            >Участникам</router-link>
            <router-link
              :to="{name: 'info'}"
              class="app-footer__block-item"
            >Информация</router-link>
          </div>
        </div>
        <div class="app-footer__block">
          <div class="app-footer__block-name">Социальные сети</div>
          <div class="column app-footer__block-items">
            <span class="app-footer__block-item">Telegram</span>
            <span class="app-footer__block-item">Facebook</span>
            <span class="app-footer__block-item">Instagram</span>
            <span class="app-footer__block-item">Twitter</span>
          </div>
        </div>
      </div>
      <div class="app-footer__bottom">
        <div class="app-footer__company app-footer__bottom-item">
          <span class="app-footer__logo">
            event contest ©
          </span>
          <span class="app-footer__politic">Политика конфиденциальности</span>
        </div>
        <div class="app-footer__phone app-footer__bottom-item">
          +7 800 555 35 35
        </div>
        <div class="app-footer__address app-footer__bottom-item">
          г. Москва, ул. Длинноименная 45, офис 16
        </div>
        <div class="app-footer__email app-footer__bottom-item">
          info@mail.mail
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss" scoped>
  .app-footer {
    background: #0E0E0E;
    color: #FFFFFF;
    padding-top: 80px;
    padding-bottom: 100px;

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      font-size: 120px;
      font-family: Sverdlovsk;
      line-height: 1;
      font-weight: 100;
      letter-spacing: 15px;
      margin: 20px 0 0;
    }

    &__block {
      &:not(:last-child) {
        width: 265px;
      }

      &:last-child {
        width: 190px;
      }
    }

    &__block-name {
      font-size: 18px;
      font-weight: 600;
      text-align: left;
      margin-bottom: 16px;
    }

    &__block-items {
      font-size: 18px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 90px;
      flex-wrap: wrap;
      font-weight: 200;
      font-family: Geometria Light;
    }

    &__block-item {
      margin-right: 40px;
      color: #ffffff;
      text-decoration: none;
      font-size: 18px;
      line-height: 1.6;

      &:hover {
        text-decoration: underline;
      }
    }

    &__bottom {
      display: flex;
      align-items: stretch;
      border-top: 1px solid #ffffff;
      margin-top: 50px;
    }

    &__company {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 25%;
    }

    &__logo {
      font-size: 18px;
    }

    &__phone {
      width: 20%;
    }

    &__politic {
      font-size: 14px;
      opacity: 0.5;
    }

    &__address {
      flex: 1;
    }

    &__email {
      width: 18%;
    }

    &__bottom-item {
      padding-top: 20px;
      height: 60px;

      &:not(:last-child) {
        border-right: 1px solid #ffffff;
      }
    }
  }
</style>
