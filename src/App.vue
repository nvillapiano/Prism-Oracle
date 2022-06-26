<template>
  <div id="app">    
    <main>
      <router-view/>
    </main>

  </div>
</template>

<script>

export default {
  components: {
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
