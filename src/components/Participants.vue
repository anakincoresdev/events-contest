<template>
  <section class="participants">
    <div class="container">
      <h2 class="participants__title app-title">
        Участники
      </h2>
      <div class="participants__items">
        <participant-card
          v-for="(item, i) of participants"
          :key="i"
          :item="item"
        />
      </div>
      <app-button
        v-if="showed < total"
        @click="showMore"
        class="participants__more"
      >
        Показать еще
      </app-button>
    </div>
  </section>
</template>

<script>
import ParticipantCard from '@/components/ParticipantCard.vue';
import AppButton from '@/components/ui/AppButton.vue';

export default {
  name: 'Participants',
  components: {
    ParticipantCard,
    AppButton,
  },
  props: {
    city: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      limit: 6,
      showed: 6,
    };
  },
  computed: {
    participants() {
      return this.$store.getters.members.slice(0, this.showed);
    },
    total() {
      return this.$store.getters.membersTotal;
    },
  },
  mounted() {
    this.$store.dispatch('getMembers', { city: this.city });
  },
  methods: {
    showMore() {
      this.showed += this.limit;
    },
  },
};
</script>

<style lang="scss" scoped>
  .participants {
    padding: 120px 0 80px;

    &__title {
      margin: 0 0 80px;
      font-size: 60px;
      font-weight: 100;
    }

    &__items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;
      width: 100%;
    }

    &__more {
      margin-top: 30px;
    }
  }
</style>
