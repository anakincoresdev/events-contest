<template>
  <section class="nominations">
    <div class="container">
      <h2 class="nominations__title">
        Выберите город
      </h2>
      <div class="flex items-start center justify-center">
        <div class="column nominations__items">
          <div
            v-for="(item, i) of nominationsFirst"
            :key="i"
            :class="{'selected': item.value === selected}"
            class="nominations__item"
            @click="select(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
        <div>
          <div
            :style="{'background-image': `url(../../cities/${selected}.png)`}"
            class="nominations__image"
          />
          <div class="column">
            <app-button
              class="nominations__vote"
              type="outlined-white"
              @click="prev"
            >
              Назад к номинациям
            </app-button>
            <app-button
              class="nominations__vote"
              type="outlined-white"
              @click="next"
            >
              К участникам
            </app-button>
          </div>
        </div>
        <div class="column nominations__items">
          <div
            v-for="(item, i) of nominationsSecond"
            :key="i"
            :class="{'selected': item.value === selected}"
            class="nominations__item"
            @click="select(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue';

export default {
  name: 'Cities',
  components: {
    AppButton,
  },
  emits: ['next'],
  data() {
    return {
      nominationsFirst: [
        { label: 'Москва', value: 'moscow' },
        { label: 'Нижний Новгород', value: 'nizhnii-novgorod' },
        { label: 'Челябинск', value: 'chelyabinsk' },
        { label: 'Ростов-на-Дону', value: 'rostov-na-donu' },
        { label: 'Пермь', value: 'perm' },
        { label: 'Краснодар', value: 'krasnodar' },
        { label: 'Тольятти', value: 'toliatti' },
        { label: 'Иркутск', value: 'irkutsk' },
        { label: 'Ярославль', value: 'yaroslavl' },
        { label: 'Екатеринбург', value: 'ekaterinburg' },
        { label: 'Омск', value: 'omsk' },
        { label: 'Уфа', value: 'ufa' },
        { label: 'Воронеж', value: 'voronezh' },
        { label: 'Томск', value: 'tomsk' },
      ],
      nominationsSecond: [
        { label: 'Новосибирск', value: 'novosibirsk' },
        { label: 'Санкт-Петербугр', value: 'saint-petersburg' },
        { label: 'Казань', value: 'kazan' },
        { label: 'Самара', value: 'samara' },
        { label: 'Красноярск', value: 'krasnoyarsk' },
        { label: 'Волгоград', value: 'volgograd' },
        { label: 'Саратов', value: 'saratov' },
        { label: 'Барнаул', value: 'barnaul' },
        { label: 'Ижевск', value: 'izhevsk' },
        { label: 'Хабаровск', value: 'habarovsk' },
        { label: 'Ульяновск', value: 'ulianovsk' },
        { label: 'Ставрополь', value: 'stavropol' },
        { label: 'Владивосток', value: 'vladivostok' },
      ],
      selected: 'moscow',
    };
  },
  methods: {
    select(target) {
      this.selected = target;
    },
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit('next', this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.nominations {
  background: #0E0E0E;
  color: #FFFFFF;
  padding: 160px 0 100px;

  &__title {
    margin: 0 0 80px;
    font-size: 60px;
    font-weight: 100;
  }

  &__items {
    flex: 1;
  }

  &__item {
    font-size: 24px;
    width: 100%;
    text-transform: uppercase;
    padding: 10px 0;
    cursor: pointer;

    &:hover, &.selected {
      border-top: 2px solid yellow;
      border-bottom: 2px solid yellow;
      padding: 8px 0;
    }
  }

  &__image {
    width: 400px;
    margin: 0 20px;
    height: 750px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__vote {
    width: 400px;

    &:first-child {
      margin-top: 60px;
      margin-bottom: 25px;
    }
  }
}
</style>
