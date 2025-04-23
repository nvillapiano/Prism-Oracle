<template>
  <div class="Pain__page">
      <Card 
        cardName="Pain"
      >
        <PainCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import PainCard from '@/components/cards/PainCard.vue';

export default {
  name: 'PainView',
  components: {
    Card,
    PainCard
  },
};
</script>

<style lang="scss" >

</style>