<template>
  <div @click="toggleHamburger($event)" class="Hamburger">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  methods: {
    toggleHamburger($event) {
      const toggle = $event.target;
      const toc = document.getElementsByClassName('ToC')[0];      

      toc.classList.toggle('ToC--active')
      function open() {
        toggle.classList.add('hamburger--active')  
        toc.classList.add('ToC--active-z')      

        setTimeout(() => {
          toggle.classList.add('hamburger--active-cross')
        }, 200);                      
      }

      function close() {
        toggle.classList.remove('hamburger--active-cross')        
        setTimeout(() => {
          toggle.classList.add('hamburger--deactivate')
        }, 200);                
        setTimeout(() => {
          toggle.classList.remove('hamburger--active')
          toggle.classList.remove('hamburger--deactivate')
          toc.classList.remove('ToC--active-z')
        }, 400); 
      }

      if (toggle.classList.contains('hamburger--active')) {
        close()
      } else {
        open()
      }      
    }
  }
}
</script>

<style lang="scss">
.Hamburger {
  position: fixed;
  top: 1rem;
  right: 1rem;    
  width: 4rem;
  height: 4rem;    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(var(--color__black), 0.25);
  padding: 0.5rem;    
  gap: 0.5rem;    
  z-index: 4;

  &:hover {
    cursor: pointer;
  }

  div {
    width: 100%;
    height: 0.25rem;
    border-radius: 5px;
    background: var(--color__white);
    pointer-events: none;
    transition: all 0.2s;
  }

  @keyframes condenseBunDown {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(0.7rem);
    }
  }

  @keyframes condenseBunUp {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-0.7rem);
    }
  }    

  &.hamburger--active {      
    div {
      &:nth-of-type(1) {
        transform: translateY(0.7rem);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:nth-of-type(3) {
        transform: translateY(-0.7rem);
      }
    }
  }

  &.hamburger--active-cross {      
    div {
      &:nth-of-type(1) {
        transform: translateY(0.75rem) rotate(45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:nth-of-type(3) {
        transform: translateY(-0.75rem) rotate(-45deg);
      }
    }
  }    

  &.hamburger--deactivate {      
    div {
      &:nth-of-type(1) {
        transform: translateY(0);
      }

      &:nth-of-type(2) {
        opacity: 1;
      }        

      &:nth-of-type(3) {
        transform: translateY(0);
      }
    }
  }
}
</style>
