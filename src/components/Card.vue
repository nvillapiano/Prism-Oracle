<template>

  <section class="Card" :class="[{ [cardName]: cardName }]">
    <div class="Card__wrapper">
      <div class="Card__design">      
        <slot></slot>
      </div>
      <footer class="Card__name">
        {{cardName}}
      </footer>      
    </div>

  </section>

</template>

<script>
export default {
  name: 'Card',
  props: {
    cardName: String
  }
}
</script>

<style lang="scss">

@mixin boxShadow($color) {
  box-shadow: 23px 18px 31px var(--color__#{$color});
}

@mixin cardColorBase($colorUppercase, $color) {
  .Card.#{$colorUppercase} {
    background: var(--color__#{$color});    

    .Card {      
      &__name {
        background: var(--color__#{$color});
      }
    }

    &::after {
      @include boxShadow(#{$color});      
    }
  }  
}

.Card {
  margin: 0 auto;
  min-width: 320px;
  aspect-ratio: 1/1.55;
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--color__white);  
  position: relative;

  &__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid var(--color__white);
  }

  &__design {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__name {
    text-align: center;
    border-top: 1px solid var(--color__white);
    padding: 1rem 2rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 1.5rem;
    z-index: 2;
  }

  // page background
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: -1;
    opacity: 0.95;
  }

  // shadow base
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    z-index: -1;        
    transform: translateX(-50%) translateY(-50%);
    filter: brightness(0.9);

  }
}

// Colors

@include cardColorBase(Anger, anger);
@include cardColorBase(Pain, pain);
@include cardColorBase(Stop, stop);

</style>
