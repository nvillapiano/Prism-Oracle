<template>
  <div class="Anger__page">
      <Card 
        cardName="Anger"
      >
        <Anger />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Anger from '@/components/cards/Anger.vue';

export default {
  name: 'anger',
  components: {
    Card,
    Anger
  },
};
</script>

<style lang="scss" >

.home {
  background: red;
}

</style>