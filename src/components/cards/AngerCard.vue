<template>
  <section class="Anger__design">
    <div class="Anger__squiggle">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="Anger__slash"></div>
    <div class="Anger__eye"></div>
    <div class="Anger__eyelid"></div>
    <div class="Anger__iris"></div>
    <div class="Anger__pupil"></div>    
  </section>
</template>

<script>
export default {
  name: 'Anger',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

$squiggle-height: 3rem;

.Anger {
  background: var(--color__anger);

  &__design {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

  &__squiggle {

    div {
      width: $squiggle-height;
      height: $squiggle-height;
      position: absolute; 
      top: 0;     
      left: 50%;
      transform: translateX(-50%);
      margin-top: -5.1rem;

      &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 140%;
          background: var(--color__white);        
      }

      &:nth-of-type(odd) {        
        
        &::after {
          transform: rotate(-45deg) translateX(1.4rem) translateY(0.6rem);
        }
      }

      &:nth-of-type(even) {
          
          &::after {
            transform: rotate(45deg) translateX(0.6rem) translateY(-1.4rem);
          }
      }

      &:nth-of-type(2) {
        top: $squiggle-height * 1;
      }
    }
  }

  &__slash {
    position: absolute;
    top: 0;
    left: -10rem;
    width: 200%;
    height: 1px;
    background: var(--color__white);
    transform: rotate(-20deg) translateY(6.4rem);
  }

  &__eye {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(44deg);
    width: 9rem;
    height: 9rem;
    border-radius: 82% 0%;
    border: 1px solid var(--color__white);
    background: var(--color__anger);
    z-index: 1;
  }

  &__eyelid {
      @extend .Anger__eye; 
      background: var(--color__anger);
      z-index: 0;
      transform: translate(-50%, -50%) rotate(44deg) scale(1.2);  
  }  

  &__pupil {
    position: absolute;
    top: 50%;
    left: 50%;    
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--color__white);
    transform: translateX(-50%) translateY(-50%);
    overflow: hidden;
    z-index: 3;
  }

  &__iris {
    @extend .Anger__pupil;
    width: 4rem;
    height: 4rem;
    border: 1px solid var(--color__white);
    background: var(--color__anger);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color__anger);
      @extend %dotMatrix;
    }
  }

  @for $i from 1 through 10 {
    .Anger__squiggle {

      div {
        &:nth-of-type(#{$i}) {
          top: $squiggle-height * ($i * 1 )
        }
      }

    }
  }  

}

</style>
