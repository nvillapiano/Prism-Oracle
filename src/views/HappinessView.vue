<template>
  <div class="Happiness__page">
      <Card 
        cardName="Happiness"
      >
        <HappinessCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import HappinessCard from '@/components/cards/HappinessCard.vue';

export default {
  name: 'HappinessView',
  components: {
    Card,
    HappinessCard
  },
};
</script>

<style lang="scss" >

</style>