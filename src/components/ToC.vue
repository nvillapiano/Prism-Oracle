<template>
  <section class="ToC">
    <div @click="closeToC($event)" class="ToC__overlay"></div>
    <div class="ToC__list">
      <router-link @click="closeToC($event)" class="ToC__link" to="/home">🏠 Home</router-link>
      <!-- <router-link @click="closeToC($event)" class="ToC__link" to="/home">🗣️ About</router-link> -->
      <div class="ToC__link">🃏 Cards</div>
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link @click="closeToC($event)" :to="route.path">
            {{ formatRouteName(route.name) }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { generateRoutes, formatRouteName } from '@/utils/routeUtils';

export default {
  name: 'Toc',
  data() {
    return {
      routes: []
    }
  },
  created() {
    // Generate routes from views, excluding Home and not including component definitions
    this.routes = generateRoutes({ includeComponent: false, excludeHome: true });
  },
  methods: {
    formatRouteName,
    closeToC() {
      const toggle = document.getElementsByClassName('Hamburger')[0]
      const toc = document.getElementsByClassName('ToC')[0];      

      function close() {
        toggle.classList.remove('hamburger--active-cross')  
        toc.classList.remove('ToC--active')      
        setTimeout(() => {
          toggle.classList.add('hamburger--deactivate')
        }, 200);                
        setTimeout(() => {
          toggle.classList.remove('hamburger--active')
          toggle.classList.remove('hamburger--deactivate')
          toc.classList.remove('ToC--active-z')
        }, 400); 
      }

      if (toggle.classList.contains('hamburger--active')) {
        close()        
      } else {
        return
      }      
    }      
  }
}
</script>

<style lang="scss">
.ToC {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  z-index: -1;

  &--active {
    pointer-events: all;  

    & .ToC__list {
      transform: translateX(0%);        
    }
  }

  &--active-z {
    z-index: 3;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__link {
    color: var(--color__white);
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    display: flex;
  }

  &__list {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 300px;
    min-width: 200px;
    width: 20vw;    
    height: 100%;
    background: rgba(var(--color__black), 0.25);
    color: var(--color__white);
    padding-top: 6rem;
    padding-left: 2rem;
    z-index: 3;
    transform: translateX(100%);
    transition: all 0.4s;

    li {
      list-style: none;
      display: flex;   
      align-items: center;
      position: relative;
      margin-left: 2.7rem;
      
      a {        
        color: var(--color__white);
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 300;
      }
    }
  }
}
</style>
