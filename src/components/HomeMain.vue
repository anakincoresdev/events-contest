<template>
  <div>
    <nominations
      v-if="step === 'nominations'"
      @next="next('cities')"
    />
    <cities
      v-else-if="step === 'cities'"
      @prev="next('nominations')"
      @next="toParticipants"
    />
    <participants
      v-else-if="step === 'participants'"
      :city="city"
    />
  </div>
</template>

<script>
import Nominations from '@/components/Nominations.vue';
import Cities from '@/components/Cities.vue';
import Participants from '@/components/Participants.vue';

export default {
  name: 'HomeMain',
  components: {
    Nominations,
    Cities,
    Participants,
  },
  data() {
    return {
      step: 'nominations',
      city: null,
    };
  },
  methods: {
    next(step) {
      this.step = step;
    },
    toParticipants(city) {
      this.step = 'participants';
      this.city = city;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
