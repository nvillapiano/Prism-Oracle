<template>
  <div class="Rejection__page">
      <Card 
        cardName="Rejection"
      >
        <RejectionCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import RejectionCard from '@/components/cards/RejectionCard.vue';

export default {
  name: 'RejectionView',
  components: {
    Card,
    RejectionCard
  },
};
</script>

<style lang="scss" >

</style>