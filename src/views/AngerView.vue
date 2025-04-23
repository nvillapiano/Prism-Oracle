<template>
  <div class="Anger__page">
      <Card 
        cardName="Anger"
      >
        <AngerCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import AngerCard from '@/components/cards/AngerCard.vue';

export default {
  name: 'AngerView',
  components: {
    Card,
    AngerCard
  },
};
</script>

<style lang="scss" >

</style>