<template>
  <div class="gallery">
    <div class="gallery__grid">
      <!-- Original static implementation:
      <Card cardName="Strength">
        <StrengthCard />
      </Card>
      <Card cardName="Success">
        <SuccessCard />
      </Card>
      <Card cardName="Rejection">
        <RejectionCard />
      </Card>
      <Card cardName="Stop">
        <StopCard />
      </Card>
      <Card cardName="Happiness">
        <HappinessCard />
      </Card>
      <Card cardName="Pain">
        <PainCard />
      </Card>
      <Card cardName="Energy">
        <EnergyCard />
      </Card>
      <Card cardName="Frustration">
        <FrustrationCard />
      </Card>
      <Card cardName="Anger">
        <AngerCard />
      </Card>
      -->
      
      <!-- Dynamic implementation: -->
      <Card 
        v-for="(card, name) in cards" 
        :key="name"
        :cardName="name"
      >
        <component :is="card" />
      </Card>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'
import Card from '@/components/Card.vue'

// Original static imports:
// import StrengthCard from '@/components/cards/StrengthCard.vue'
// import SuccessCard from '@/components/cards/SuccessCard.vue'
// import RejectionCard from '@/components/cards/RejectionCard.vue'
// import StopCard from '@/components/cards/StopCard.vue'
// import HappinessCard from '@/components/cards/HappinessCard.vue'
// import PainCard from '@/components/cards/PainCard.vue'
// import EnergyCard from '@/components/cards/EnergyCard.vue'
// import FrustrationCard from '@/components/cards/FrustrationCard.vue'
// import AngerCard from '@/components/cards/AngerCard.vue'

// Dynamic import of all card components
const cardComponents = import.meta.glob('@/components/cards/*Card.vue', { eager: true })

export default {
  name: 'Gallery',
  components: {
    Card,
    // Original static component registration:
    // StrengthCard,
    // SuccessCard,
    // RejectionCard,
    // StopCard,
    // HappinessCard,
    // PainCard,
    // EnergyCard,
    // FrustrationCard,
    // AngerCard
  },
  data() {
    // Process the imported components
    const cards = Object.entries(cardComponents).reduce((acc, [path, module]) => {
      // Extract name from path (e.g., "Strength" from "/components/cards/StrengthCard.vue")
      const name = path.match(/\/(\w+)Card\.vue$/)[1]
      acc[name] = markRaw(module.default) // Mark the component as raw to prevent reactivity
      return acc
    }, {})

    return {
      cards
    }
  }
}
</script>

<style lang="scss">
.gallery {
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;

    // .Card {
    //   &::before {
    //     content: none;
    //   }
    // }
  }
}
</style> 