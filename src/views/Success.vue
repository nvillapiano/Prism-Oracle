<template>
  <div class="Success__page">
      <Card 
        cardName="Success"
      >
        <Success />
      </Card>    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Success from '@/components/cards/Success.vue';

export default {
  name: 'success',
  components: {
    Card,
    Success
  },
};
</script>

<style lang="scss" >

</style>