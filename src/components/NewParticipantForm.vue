<template>
  <section class="new-participant-form">
    <h2 class="app-title">
      Заявка на участие
    </h2>
    <p class="new-participant-form__description">
      один из этапов определения победителя — общее открытое голосование на сайте премии.
      голосование стартует только после окончания срока подачи заявок
      <br/>
      <br/>период реализации: <strong>01.12.2020 - 31.12.2021</strong>
      <br/>
      <br/>обращаем ваше внимание, что в случае накруток
      голосов участники будут сниматься с голосования!
      <br/>
      <br/>финалистов и победителей определяет экспертный совет жюри.
    </p>
    <form class="new-participant-form__form">
      <app-field
        v-model="name"
        placeholder="ФИО"
        class="new-participant-form__field"
      />
      <app-field
        v-model="email"
        placeholder="Email"
        class="new-participant-form__field"
      />
      <app-select
        v-model="city"
        :options="cities"
        placeholder="Город"
        class="new-participant-form__field"
      />
      <app-select
        v-model="nomination"
        :options="nominations"
        placeholder="Номинация"
        class="new-participant-form__field"
      />
      <app-button
        @click="submit"
        class="new-participant-form__submit-btn"
      >
        Подать заявку
      </app-button>
    </form>
  </section>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue';
import AppField from '@/components/ui/AppField.vue';
import AppSelect from '@/components/ui/AppSelect.vue';
import cities from '@/dictionaries/cities';
import nominations from '@/dictionaries/nominations';

export default {
  name: 'NewParticipantForm',
  components: {
    AppButton,
    AppField,
    AppSelect,
  },
  data() {
    return {
      name: '',
      email: '',
      city: null,
      nomination: null,
      cities,
      nominations,
    };
  },
  methods: {
    submit() {
      console.log(123);
    },
  },
};
</script>

<style lang="scss" scoped>
  .new-participant-form {
    padding: 160px 0 100px;
    text-align: center;

    &__form {
      display: flex;
      flex-direction: column;
      width: 420px;
      text-align: center;
      margin: 0 auto;
    }

    &__description {
      width: 420px;
      margin: 0 auto;
      text-align: left;
      line-height: 1.5;
      margin-bottom: 30px;
    }

    &__field {
      margin-bottom: 20px;
    }

    &__submit-btn {
      margin-top: 20px;
    }
  }
</style>
