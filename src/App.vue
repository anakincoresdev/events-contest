<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="scss">
#app {
  font-family: Geometria;
  text-align: center;
  color: #0E0E0E;
  background: #EDEDED;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
