<template>
  <section class="Stop">
    <div class="Stop__design">
      <div class="Stop__sign">
        <div class="Stop__sign--inner"> 
          <div class="Stop__sign--cross"></div>         
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stop',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

.Stop {
  height: 100%;

  &__design {
    height: 100%;
    @extend %dotMatrixLarge;
  }

  &__sign {
    width: 80%;
    min-height: 40%;
    background: var(--color__white);    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    aspect-ratio: 1/1;
    margin-top: -1.5rem;
    // octogon
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background: var(--color__stop);
      width: 100%;
      height: 100%;
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);   
      transform: scale(0.985);   
    }

    &--inner {
      width: calc(100% - 2rem);
      min-height: 40%;
      background: var(--color__white);   
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      aspect-ratio: 1/1;
      // octogon
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      z-index: 2;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background: var(--color__stop);
        width: 100%;
        height: 100%;
        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);   
        transform: scale(0.985);   
      }
    }

    &--cross {
      position: absolute;
      width: 100%;
      height: 100%;
      // background: blue;
      z-index: 3;
      transform: rotate(45deg) scale(0.75);

      &::before {
        content: '';
        position: absolute;
        @include center();
        width: .1rem;
        height: 100%;
        background: var(--color__white);
      }

      &::after {
        content: '';
        position: absolute;
        @include center();
        width: .1rem;
        height: 100%;
        background: var(--color__white);
        transform: translateX(-50%) translateY(-50%) rotate(90deg);
      }
    }
  }
  
}

</style>
