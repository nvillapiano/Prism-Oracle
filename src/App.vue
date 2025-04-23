<template>
  <div id="app">    
    <nav>
      <Hamburger />
      <ToC />
    </nav>
    <main>
      <router-view/>
    </main>

  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger.vue'
import ToC from '@/components/ToC.vue'

export default {
  name: 'App',
  components: {
    Hamburger,
    ToC
  }
}
</script>

<style lang="scss">
@use "@/globals/index" as *;
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500&display=swap');

html,
body {
  font-family: 'Work Sans', sans-serif;  
  font-weight: 300;
}

main {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
