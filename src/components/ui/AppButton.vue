<template>
  <button
    type="button"
    class="app-button"
    :class="{'outlined': type === 'outlined', 'outlined-white': type === 'outlined-white'}"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss" scoped>
  .app-button {
    border: 0;
    background: #0E0E0E;
    color: white;
    height: 44px;
    padding: 0 30px;
    font-size: 16px;
    cursor: pointer;

    &.outlined {
      background: transparent;
      color: black;
      border: 1px solid #0E0E0E;
    }

    &.outlined-white {
      background: transparent;
      color: white;
      border: 1px solid white;
    }
  }
</style>
