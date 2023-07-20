<template>
  <div class="Energy__page">
      <Card 
        cardName="Energy"
      >
        <Energy />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Energy from '@/components/cards/Energy.vue';

export default {
  name: 'energy',
  components: {
    Card,
    Energy
  },
};
</script>

<style lang="scss" >

</style>