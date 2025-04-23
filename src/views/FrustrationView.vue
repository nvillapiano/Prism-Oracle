<template>
  <div class="Frustration__page">
      <Card 
        cardName="Frustration"
      >
        <FrustrationCard />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import FrustrationCard from '@/components/cards/FrustrationCard.vue';

export default {
  name: 'FrustrationView',
  components: {
    Card,
    FrustrationCard
  },
};
</script>

<style lang="scss" >

</style>