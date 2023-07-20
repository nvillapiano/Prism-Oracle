<template>
  <div class="Happiness__page">
      <Card 
        cardName="Happiness"
      >
        <Happiness />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Happiness from '@/components/cards/Happiness.vue';

export default {
  name: 'happiness',
  components: {
    Card,
    Happiness
  },
};
</script>

<style lang="scss" >

</style>