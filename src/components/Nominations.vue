<template>
  <section class="nominations">
    <div class="container">
      <h2 class="nominations__title app-title">
        Номинации
      </h2>
      <div class="flex items-start center justify-center">
        <div class="column nominations__items">
          <div
            v-for="(item, i) of nominationsFirst"
            :key="i"
            :class="{'selected': item.value === selected}"
            class="nominations__item menu-item"
            @click="select(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
        <div>
          <div
            :style="{'background-image': `url(../../nominations/${selected}.png)`}"
            class="nominations__image"
          />
          <app-button
            class="nominations__vote"
            type="outlined-white"
            @click="next"
          >
            Голосовать
          </app-button>
        </div>
        <div class="column nominations__items">
          <div
            v-for="(item, i) of nominationsSecond"
            :key="i"
            :class="{'selected': item.value === selected}"
            class="nominations__item menu-item"
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
  name: 'Nominations',
  components: {
    AppButton,
  },
  emits: ['next'],
  data() {
    return {
      nominationsFirst: [
        { label: 'Загс', value: 'registry' },
        { label: 'Церемониймейстер', value: 'ceremonies' },
        { label: 'Кафе / Ресторан / Площадка', value: 'cafe' },
        { label: 'Ведущий', value: 'presenter' },
        { label: 'Ведущая', value: 'presenter-female' },
        { label: 'Фотограф', value: 'photo' },
        { label: 'Видеооператор', value: 'video' },
        { label: 'Декор / Оформление', value: 'decor' },
        { label: 'Мужской салон', value: 'man-saloon' },
        { label: 'Женский салон', value: 'woman-saloon' },
        { label: 'Стилист', value: 'stylist' },
      ],
      nominationsSecond: [
        { label: 'Транспорт / Аренда авто', value: 'transport' },
        { label: 'Артисты / Кавер-группа / Исполнитель', value: 'artists' },
        { label: 'Хореограф / Первый танец', value: 'horeo' },
        { label: 'Обручальные кольца', value: 'rings' },
        { label: 'Кондитер', value: 'confectioner' },
        { label: 'Флористика', value: 'flowers' },
        { label: 'Пригласительные / Полиграфия', value: 'printing' },
        { label: 'Организатор / Координатор / Event-агенство', value: 'organization' },
        { label: 'DJ', value: 'dj' },
        { label: 'Welcome-зона', value: 'welcome-zone' },
        { label: 'Кейтеринг', value: 'catering' },
      ],
      selected: 'registry',
    };
  },
  methods: {
    select(target) {
      this.selected = target;
    },
    next() {
      this.$emit(this.selected.value);
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
      font-size: 32px;
      width: 100%;
      text-transform: uppercase;
      padding: 10px 0;
      cursor: pointer;

      &:hover, &.selected {
        padding: 8px 0;
      }
    }

    &__image {
      width: 400px;
      margin: 0 20px;
      height: 650px;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &__vote {
      width: 400px;
      margin-top: 60px;
    }
  }
</style>
