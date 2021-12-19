<template>
  <div>
    <template v-if="step === 'nominations'">
      <nominations @next="toCities" />
      <new-participant-form />
    </template>
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
import NewParticipantForm from '@/components/NewParticipantForm.vue';

export default {
  name: 'HomeMain',
  components: {
    Nominations,
    Cities,
    Participants,
    NewParticipantForm,
  },
  data() {
    return {
      step: 'nominations',
      nomination: null,
      city: null,
    };
  },
  methods: {
    next(step) {
      this.step = step;
    },
    toParticipants(city) {
      this.city = city;
      this.step = 'participants';
    },
    toCities(nomination) {
      this.nomination = nomination;
      this.step = 'cities';
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
