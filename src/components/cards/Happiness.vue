<template>
  <section class="Happiness">
    <div class="Happiness__face">
      <div class="Happiness__eyes">
        <div class="Happiness__eye"></div>
        <div class="Happiness__eye"></div>
      </div>
      <div class="Happiness__mouth">

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Happiness',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

.Happiness {
  height: 100%;
  width: 100%;
  position: relative;

  &__face {
    position: absolute;
    height: 35%;
    width: calc(100% - 4rem);
    // border: 1px solid var(--color__white);
    @include center();  
    overflow: hidden;  
  }

  &__eyes {
    position: relative;
    width: calc(100% - 1rem);
    margin-left: 0.5rem;
    height: 65%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    margin-top: -2.9rem;
    z-index: 2;
    background: var(--color__happiness);
  }

  &__eye {
    width: calc(50% - 2rem);
    min-height: 1rem;
    aspect-ratio: 1/1.1;
    border: 1px solid var(--color__white);
    border-radius: 50%;
  }

  &__mouth {
    position: absolute;
    bottom: 0.9rem;
    width: calc(100% - 2rem);
    min-height: 1rem;
    aspect-ratio: 1/1;
    background: var(--color__happiness);
    border-radius: 50%;
    border: 1px solid var(--color__white);
    border-top: none;
    left: 50%;
    transform: translateX(-50%);

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 5.8rem;
      left: -0.45rem;
      width: 1rem;
      height: 1rem;
      background: var(--color__happiness);
      border: 1px solid var(--color__white);
      border-radius: 50%;
    }

    &::after {
      left: initial;
      right: -0.45rem;
    }

  }
}

</style>
