<template>
  <section class="Template">
    <div class="Pain__design">
      <div class="Pain__drips">
        <div class="Pain__drip-crest"></div>
        <div class="Pain__drip-crest"></div>
        <div class="Pain__drip-valley"></div>
        <div class="Pain__drip-valley"></div>
        <div class="Pain__drip-valley"></div>
        <div class="Pain__spot-remover"></div>
        <div class="Pain__spot-remover"></div>
        <div class="Pain__spot-remover"></div>
        <div class="Pain__spot-remover"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Template',
  props: {
    templateProp: String
  }
}
</script>

<style lang="scss">

@mixin dots() {
  background-image: 
    radial-gradient(var(--color__white) 10%, transparent 11%),
    radial-gradient(var(--color__white) 10%, transparent 11%);
  background-size: 8px 11px;
  background-position: 0;
  background-repeat: repeat;  
}

.Pain {

  &__design {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color__pain);
    @include dots();
  }

  &__drips {
    position: absolute;
    bottom: 48px;
    left: 0;
    width: 100%;
    height: 36%;
    background: var(--color__pain);
  }

  &__drip-crest {
    position: absolute;
    top: -35px;
    left: 20%;
    width: 20%;
    height: 43px;
    background: var(--color__pain);
    border: 1px solid var(--color__white);
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: -28px;
      left: -1px;
      width: calc(100% + 2px);
      height: 58px;
      background: inherit;
      border: 1px solid var(--color__white);
      border-radius: 27px 27px 16px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 195px;
      background: inherit;
    }

    &:nth-of-type(1) {
      @media only screen and (max-resolution: 1dppx) {
        height: 30px;    
      }
    }    

    &:nth-of-type(2) {
    top: -170px;
    left: 60%;
    height: 163px;
    }
  }

  &__drip-valley {
    position: absolute;
    bottom: 115px;
    left: -1px;
    aspect-ratio: 1/1.53;
    width: calc(20% + 2px);
    border-radius: 150px 150px 0 0;
    background: var(--color__pain);
    transform: rotate(180deg);
    border: 1px solid white;
    border-bottom: none;
    @include dots();

    &:nth-of-type(3) {
      bottom: 112px;
      background-position: 1px 0px;
    }

    &:nth-of-type(4) {
      bottom: 82.5px;
      left: 113.4px;
      width: calc(20% + 2px);
      aspect-ratio: 1/1.881;
      background-position: 3.6px 6px;
      z-index: 2;
    }

    &:nth-of-type(5) {
      bottom: 143px;
      left: calc(80% - 1px);
      width: calc(20% + 3px);
      aspect-ratio: 1/1.9;
      background-position: -1px -9px;
    }
  }

  &__spot-remover {
    position: absolute;
    top: 27px;
    left: 57px;
    width: 5px;
    height: 128px;
    background: var(--color__pain);
    z-index: 2;
    border-radius: 12px 5px 6px;

    & + .Pain__spot-remover {
      top: 57px;
      left: 110px;
      border-radius: 0px 22px 6px / 18px 61px 6px;

      & + .Pain__spot-remover {
        top: 58px;
        left: 171px;
        border-radius: 47px 0px 20px/0px 107px 100px;
        transform: rotate(180deg);

        & + .Pain__spot-remover {
          height: 160px;
          left: 225px;
          top: -7px;
          border-radius: 1px 24px 6px/0px 87px 6px;
        }
      }
    }
  }

  // &__drip-valley,
  &__spot-remover {
    display: none;
  }
}



</style>
