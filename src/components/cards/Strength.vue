<template>
  <section class="Strength">
    <div class="Strength__column">
      <div class="Strength__column-base"></div>
      <div class="Strength__column-pillar"></div>
      <div class="Strength__column-base Strength__column-base--top"></div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: 'Strength',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

.Strength {
  height: 100%;
  @extend %dotMatrixLarge;

  &__column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100% - 6rem);
    padding-top: 2rem;
  }

  &__column-base {
    position: relative;
    width: 70%;
    height: 4rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2rem;
      border: 1px solid var(--color__white);
      background: var(--color__strength);
    }

    &::before {

    }

    &::after {
      width: calc(100% - 4rem);
    }

    &--top {
      flex-direction: column-reverse;
    }
  }

  &__column-pillar {
    height: 100%;
    width: 35%;
    border: 1px solid var(--color__white);
    background: var(--color__strength);
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 1.5rem;
      height: calc(100% - 3rem);
      border-left: 1px solid var(--color__white);
      border-right: 1px solid var(--color__white);
    }

    &::after {
      border-left: none;
    }
  }
}

</style>
