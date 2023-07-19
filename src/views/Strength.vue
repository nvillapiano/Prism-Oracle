<template>
  <div class="Strength__page">
      <Card 
        cardName="Strength"
      >
        <Strength />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Strength from '@/components/cards/Strength.vue';

export default {
  name: 'strength',
  components: {
    Card,
    Strength
  },
};
</script>

<style lang="scss" >

</style>