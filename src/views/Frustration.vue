<template>
  <div class="Frustration__page">
      <Card 
        cardName="Frustration"
      >
        <Frustration />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Frustration from '@/components/cards/Frustration.vue';

export default {
  name: 'frustration',
  components: {
    Card,
    Frustration
  },
};
</script>

<style lang="scss" >

</style>