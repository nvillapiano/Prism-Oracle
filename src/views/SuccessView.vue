<template>
  <div class="Success__page">
      <Card 
        cardName="Success"
      >
        <SuccessCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import SuccessCard from '@/components/cards/SuccessCard.vue';

export default {
  name: 'SuccessView',
  components: {
    Card,
    SuccessCard
  },
};
</script>

<style lang="scss" >

</style>