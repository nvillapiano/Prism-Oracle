<template>
  <section class="Success">
    <div class="Success__sun">      
    </div>    
    <div class="Success__sun-rays">
      <div class="Success__sun-ray"></div>
      <div class="Success__sun-ray"></div>
      <div class="Success__sun-ray"></div>
      <div class="Success__sun-ray"></div>
    </div>
    <div class="Success__arch">
      <div class="Success__arch-inner"></div>
      <div class="Success__arch-inner"></div>
      <div class="Success__arch-inner"></div>
      <div class="Success__arch-inner"></div>
      <div class="Success__arch-inner"></div>
      <div class="Success__arch-inner"></div>
    </div>
    <div class="Success__hill"></div>
  </section>
</template>

<script>
export default {
  name: 'Success',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

.Success {
  height: 100%;
  @include dotMatrixLarge();

  &__hill {
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 200%;
    height: 40%;
    background: var(--color__success);
    border-top: 1px solid var(--color__white);
    border-radius: 50%;
    z-index: 1;
  }

  &__arch {
    position: absolute;
    @include center();
    width: calc(100% - 1rem);
    height: 55%;

    &-inner {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 2rem);
      height: 100%;
      background: var(--color__success);
      border: 1px solid var(--color__white);
      // border-radius: 46% 46% 0 0;
      border-radius: 50% 50% 0 0 / 50%;

      &:nth-of-type(6) {
        width: calc(100% - 15rem) !important;
        height: 5.5rem !important;
        border-radius: 50% 50% 0 0 / 22% !important;
        @extend %dotMatrix;
      }   
    }
  }

  &__sun {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 3.5rem;
    min-height: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid var(--color__white);
    background: var(--color__success);
    z-index: 2;

    &-rays {
      position: absolute;
      top: 3.75rem;
      right: 1.25rem;
      width: 5rem;
      min-height: 1rem;
      aspect-ratio: 1;
      // background: blue;
    }

    &-ray {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 1px;
      background: var(--color__white);

      &:nth-of-type(2) {
        transform: rotate(90deg);
      }

      &:nth-of-type(3) {
        transform: rotate(45deg);
      }

      &:nth-of-type(4) {
        transform: rotate(-45deg);
      }
    }
  }
}

@for $i from 1 through 6 {
  $j: 50 - $i * 2%;
  .Success__arch-inner:nth-of-type(#{$i}) {    
    width: calc(100% - (2rem * ($i / .8)));
    height: calc(100% - (1rem * (($i * .9) + $i / 1)));
    margin-top: (1rem + (($i * 1.3) - 2));
    border-radius: 50% 50% 0 0 / #{$j};
    z-index: $i;    
  }
}   



</style>
