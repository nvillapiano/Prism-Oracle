<template>
  <section class="Rejection">
    <div class="Rejection__cross-container">
      <div class="Rejection__cross"></div>
      <div class="Rejection__cross"></div>
      <div class="Rejection__cross"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Rejection',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

.Rejection {
  height: 100%;
  @include dotMatrixLarge();

  &__cross-container {
    position: absolute;
    @include center();
    width: calc(100% - 2rem);
    min-height: 1rem;
    aspect-ratio: 1/1;
    margin-top: -0.5rem;
  }

  &__cross {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;    
    transform: rotate(-45deg);

    &::before,
    &::after {
      content: '';
      position: absolute;
      @include center();
      width: 100%;
      height: 2.5rem;
      border: 1px solid var(--color__white);
      background: var(--color__rejection);
    }

    &::after {
      width: 2.5rem;
      height: 100%;
    }

    &:nth-of-type(2) {
      margin-top: -1rem;
      z-index: 10;
    }

    &:nth-of-type(3) {
      margin-top: -2rem;
      z-index: 20;
    }
  }
}

</style>
