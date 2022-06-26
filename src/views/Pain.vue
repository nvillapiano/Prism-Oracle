<template>
  <div class="Pain__page">
      <Card 
        cardName="Pain"
      >
        <Pain />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Pain from '@/components/cards/Pain.vue';

export default {
  name: 'pain',
  components: {
    Card,
    Pain
  },
};
</script>

<style lang="scss" >

.home {
  background: red;
}

</style>