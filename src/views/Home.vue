<template>
  <div>
    <image-with-title />
    <home-main />
  </div>
</template>

<script>
import ImageWithTitle from '@/components/ImageWithTitle.vue';
import HomeMain from '@/components/HomeMain.vue';

export default {
  name: 'Home',
  components: {
    ImageWithTitle,
    HomeMain,
  },
  mounted() {
    // this.$store.dispatch('getMembers');
  },
};
</script>
