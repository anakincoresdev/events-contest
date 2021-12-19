<template>
  <div
    :style="{'background-image': `url(../../${imageName}.png)`}"
    class="image-with-title"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ImageWithTitle',
  props: {
    imageName: {
      type: String,
      default: 'champagne',
    },
  },
};
</script>

<style lang="scss" scoped>
  .image-with-title {
    height: 350px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
