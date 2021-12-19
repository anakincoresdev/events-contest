<template>
  <label class="app-field">
    <input
      :value="modelValue"
      type="text"
      class="app-field__input"
      :placeholder="placeholder"
      @input="input"
    >
  </label>
</template>

<script>
export default {
  name: 'AppField',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:model-value'],
  methods: {
    input(evt) {
      this.$emit('update:model-value', evt.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .app-field {
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

      &:focus {
        outline: none;
      }
    }
  }
</style>
