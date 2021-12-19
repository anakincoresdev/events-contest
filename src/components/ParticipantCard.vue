<template>
  <div class="participant-card">
    <div
      :style="{'background-image': `url(${item[3]})`}"
      class="participant-card__photo"
    />
    <div class="participant-card__name">
      {{ item[0] }}
    </div>
    <div class="participant-card__votes">
      <img
        src="icons/heart.png"
        class="participant-card__heart"
      >
      {{ item[4] }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParticipantCard',
  components: {
  },
  props: {
    item: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  .participant-card {
    font-size: 20px;

    &__photo {
      height: 386px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    &__name {
      margin: 20px;
    }

    &__votes {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__heart {
      margin-right: 10px;
    }
  }
</style>
