<template>
  <div id="app">
    <main>
      <Card 
        cardName="Anger"
        color="anger"
      >
        <Anger />
      </Card>
    </main>

  </div>
</template>

<script>
import Card from './components/Card.vue'
import Anger from './components/cards/Anger.vue'

export default {
  name: 'App',
  components: {
    Card,
    Anger,
  }
}
</script>

<style lang="scss">

@import "@/globals/index.scss";
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');

html,
body {
  font-family: 'Work Sans', sans-serif;  
}

main {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
