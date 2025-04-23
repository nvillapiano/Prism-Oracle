<template>
  <section class="Frustration">
    <div class="Frustration__blank">      
    </div>
    <div class="Frustration__peg">
      <div class="Frustration__peg--top">        
      </div>
      <div class="Frustration__peg--left">        
      </div>    
      <div class="Frustration__peg--right">        
      </div>      
    </div>
    <div class="Frustration__hole">      
    </div>
  </section>
</template>

<script>
export default {
  name: 'Frustration',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

.Frustration {
  height: 100%;
  @extend %dotMatrixLarge;

  &__blank {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35%;
    background: var(--color__frustration);
    z-index: 1;
  }

  &__peg {
    position: absolute;
    top: 5.25rem;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    height: 40%;
    width: 8rem;    
    z-index: 2;   

    &--top {
      position: absolute;
      top: -3.8rem;
      left: 50%;
      transform: translateX(-50%);
      width: 8rem;
      min-height: 5rem;
      z-index: 3;
      clip-path: polygon(50% 10%, 100% 53%, 50% 100%, 0% 53%);      
      background: var(--color__white);

      &::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 50%;
        transform: translateX(-50%) scale(0.95);
        width: 8rem;
        min-height: 5rem;
        z-index: 4;
        clip-path: polygon(50% 10%, 100% 53%, 50% 100%, 0% 53%);   
        background: var(--color__frustration);        
      }
    }
    
    &--left,
    &--right {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) skewY(30deg);
      margin-left: -2rem;
      height: 100%;
      width: 50%;
      border: 2px solid var(--color__white);
      border-top: 1px solid var(--color__white);
      background: var(--color__frustration);
      z-index: 2;          
    }

    &--left {
      border-right: 1px solid var(--color__white);
    }

    &--right {
      margin-left: 2rem;      
      transform: translateX(-50%) skewY(-30deg);
      border-left: 1px solid var(--color__white);      
    }

    // &::after {
    //   content: "";
    //   position: absolute;
    //   top: -1.5rem;
    //   left: 50%;
    //   transform: translateX(-50%) skewY(-40deg);
    //   margin-left: 4rem;
    //   height: 100%;
    //   width: 4rem;
    //   border: 1px solid var(--color__white);
    //   background: var(--color__frustration);
    //   z-index: 2;          
    // }
  }

  &__hole {
    position: absolute;
    left: 50%;
    bottom: 27%;
    width: 37.5%;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid var(--color__white);
    transform: translateX(-50%);
    background: var(--color__white);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color__frustration);
      width: 100%;
      height: 3.25rem;
      border-radius: 50%;
    }
  }
}

</style>
