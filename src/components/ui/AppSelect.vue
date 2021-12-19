<template>
  <label class="app-select">
    <input
      :value="modelValue && modelValue.label ? modelValue.label : undefined"
      type="text"
      ref="input"
      readonly
      :placeholder="placeholder"
      class="app-select__input"
      @focusin="focusin"
    >
    <div
      v-show="focused"
      class="app-select__menu"
    >
      <ul class="app-select__options">
        <li
          v-for="opt of options"
          :key="opt.value"
          class="app-select__option"
          @click="select(opt)"
        >
          {{ opt.label }}
        </li>
      </ul>
    </div>
  </label>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Object,
      default: () => ({ label: '', value: '' }),
    },
    placeholder: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.focusoutOnDocumentClick);
  },
  unmounted() {
    document.removeEventListener('click', this.focusoutOnDocumentClick);
  },
  methods: {
    focusoutOnDocumentClick(evt) {
      if (!evt.target.className.includes('app-select')) {
        this.focused = false;
      }
    },
    select(option) {
      setTimeout(() => {
        this.focused = false;
        this.$refs.input.blur();
      }, 0);
      this.$emit('update:model-value', option);
    },
    focusin() {
      this.focused = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .app-select {
    position: relative;

    &__input {
      width: 100%;
      height: 44px;
      background: transparent;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid #0E0E0E;
      font-size: 18px;
      font-weight: 100;
      font-family: Geometria;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    &__menu {
      position: absolute;
      left: 0;
      top: 44px;
      background: #FFFFFF;
      width: 100%;
      height: 200px;
      overflow-y: auto;
      z-index: 10;
    }

    &__options {
      margin: 0;
      padding: 0;
      text-align: left;
    }

    &__option {
      list-style: none;
      cursor: pointer;
      padding: 5px 0;
      &:hover {
        background: darken(#fff, 2%);
      }
    }
  }
</style>
