<template>
  <div class="Stop__page">
      <Card 
        cardName="Stop"
      >
        <StopCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import StopCard from '@/components/cards/StopCard.vue';

export default {
  name: 'StopView',
  components: {
    Card,
    StopCard
  },
};
</script>

<style lang="scss" >

</style>