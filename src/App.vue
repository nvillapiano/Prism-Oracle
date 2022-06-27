<template>
  <div id="app">    
    <nav>
      <div @click="toggleHamburger($event)" class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    <main>
      <router-view/>
    </main>

  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    toggleHamburger($event) {
      const toggle = $event.target;
      if (toggle.classList.contains('hamburger--active')) {
        toggle.classList.add('hamburger--deactivate')
        setTimeout(() => {
          toggle.classList.remove('hamburger--active')
          toggle.classList.remove('hamburger--deactivate')
        }, 300);        
        console.log('if', toggle)
      } else {
        toggle.classList.add('hamburger--active')
        console.log('else', toggle)
      }
      
    },
    detectPixelDensity() {
      console.log(window.devicePixelRatio)
    }
  },
  mounted () {
    this.detectPixelDensity();
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

nav {

  .hamburger {
    position: fixed;
    top: 1rem;
    right: 1rem;    
    width: 4rem;
    height: 4rem;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(var(--color__black), 0.25);
    padding: 0.5rem;    
    gap: 0.5rem;    

    &:hover {
      cursor: pointer;
    }

    div {
      width: 100%;
      height: 0.25rem;
      border-radius: 5px;
      background: var(--color__white);
      pointer-events: none;
      transition: all 0.3s;
    }

    @keyframes condenseBunDown {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(0.7rem);
      }
    }

    @keyframes condenseBunUp {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(-0.7rem);
      }
    }    

    &.hamburger--active {      
      
      div {

        &:nth-of-type(1) {
          transform: translateY(0.7rem);
        }

        &:nth-of-type(2) {
          opacity: 0;
        }

        &:nth-of-type(3) {
          transform: translateY(-0.7rem);
        }
      }
    }

    &.hamburger--deactivate {      
      
      div {

        &:nth-of-type(1) {
          transform: translateY(0);
        }

        &:nth-of-type(3) {
          transform: translateY(0);
        }
      }
    }
  }
}

</style>
