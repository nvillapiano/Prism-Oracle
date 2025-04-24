<template>
  <div class="home">
    <section class="home__header">
      <h1>Prism Oracle</h1>
      <h2>by Nicole Pivirotto</h2>
    </section>
    <Gallery class="home__gallery" />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'HomeView',
  components: {
    Gallery
  },
};
</script>

<style lang="scss">
* {
  &::selection {
    text-shadow: 0px 0px 20px rgba(var(--color__black), 0.5);
  }
}

.home {
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%);
  display: flex;
  flex-direction: column;

  &__header {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1,
    h2 {
      display: block;
      color: var(--color__white);
      text-shadow: 1px 1px 0px rgba(var(--color__black), 0.3);
      transition: all 0.3s;
    }

    h1 {
      font-size: 7rem;      

      @media only screen and (max-width: 1440px) {
        font-size: calc(7vw + 0.5rem);
      }

      @media only screen and (max-width: 640px) {
        font-size: 3.25rem;
      }
    }
  }

  &__gallery {
    flex: 1;
    
    :deep(.gallery) {
      min-height: 0;  // Override the 100vh min-height
    }
  }
}
</style>