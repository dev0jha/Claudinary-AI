import React from 'react'
import { HeroSectionOne } from './(app)/hero'
import { InfiniteMovingCardsDemo } from './(app)/infiniteMovementCard'
import { PricingDemo } from './(app)/Pricing'
import ContactDemo  from './(app)/Contact'
function page() {
  return (
    <div>
      
      <HeroSectionOne />
      <InfiniteMovingCardsDemo />
      <PricingDemo />
      <ContactDemo />
      
    </div>
  )
}

export default page
