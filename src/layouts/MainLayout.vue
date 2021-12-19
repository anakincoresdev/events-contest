<template>
  <app-header />
  <router-view />
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader.vue';

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
  },
};
</script>

<style scoped>

</style>
