<template>
  <div class="Energy__page">
      <Card 
        cardName="Energy"
      >
        <EnergyCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import EnergyCard from '@/components/cards/EnergyCard.vue';

export default {
  name: 'EnergyView',
  components: {
    Card,
    EnergyCard
  },
};
</script>

<style lang="scss" >

</style>