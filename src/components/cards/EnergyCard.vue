<template>
  <section class="Energy">
    <div class="Energy__circle-wrapper">
      <div class="Energy__cross">
      </div>
      <div class="Energy__inner-circle">        
      </div>
      <div class="Energy__oval">        
      </div>
      <div class="Energy__oval">        
      </div>
      <div class="Energy__oval">        
      </div>
      <div class="Energy__oval">        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Energy',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

.Energy {
  height: 100%;

  &__circle-wrapper {
    min-width: 80%;
    max-height: 80%;
    aspect-ratio: 1/1;
    border: 1px solid var(--color__white);
    border-radius: 50%;
    margin: 5.5rem 2rem 2rem 2rem;
    overflow: hidden;
    position: relative;
  }

  &__cross {
    width: 100%;
    height: 100%;
    position: absolute;
    @include center();

    &::before,
    &::after {
      content: '';
      position: absolute;
      @include center();
      width: 1px;
      height: 100%;
      background: var(--color__white);
    }

    &::after {
      transform: translateX(-50%) translateY(-50%) rotate(90deg);
    }
  }

  &__inner-circle {
    position: absolute;
    @include center();
    width: 2rem;
    height: 2rem;
    aspect-ratio: 1/1;
    border: 1px solid var(--color__white);
    border-radius: 50%;
    background-color: var(--color__energy);
    z-index: 100;
  }
  
  &__oval {
    position: absolute;
    @include center();
    width: 100%;
    height: 45%;
    border: 1px solid var(--color__white);
    border-radius: 50%;

    & + div {
      transform: translateX(-50%) translateY(-50%) rotate(90deg);

      & + div {
        transform: translateX(-50%) translateY(-50%) rotate(45deg);

        & + div {
          transform: translateX(-50%) translateY(-50%) rotate(135deg);
        }
      }
    }
  }
}

</style>
