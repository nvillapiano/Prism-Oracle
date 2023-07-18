<template>
  <div class="Stop__page">
      <Card 
        cardName="Stop"
      >
        <Stop />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Stop from '@/components/cards/Stop.vue';

export default {
  name: 'stop',
  components: {
    Card,
    Stop
  },
};
</script>

<style lang="scss" >

</style>