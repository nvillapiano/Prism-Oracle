<template>
  <div class="Rejection__page">
      <Card 
        cardName="Rejection"
      >
        <Rejection />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Rejection from '@/components/cards/Rejection.vue';

export default {
  name: 'rejection',
  components: {
    Card,
    Rejection
  },
};
</script>

<style lang="scss" >

</style>