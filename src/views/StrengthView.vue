<template>
  <div class="Strength__page">
      <Card 
        cardName="Strength"
      >
        <StrengthCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import StrengthCard from '@/components/cards/StrengthCard.vue';

export default {
  name: 'StrengthView',
  components: {
    Card,
    StrengthCard
  },
};
</script>

<style lang="scss" >

</style>