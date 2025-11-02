import React from 'react'
import { HeroSectionOne } from './(app)/hero'
import { InfiniteMovingCardsDemo } from './(app)/infiniteMovementCard'
import { PricingDemo } from './(app)/Pricing'
import ContactDemo  from './(app)/Contact'
import Features from './(app)/Features'
import Stats from './(app)/Stats'
import Benefits from './(app)/Benefits'
import CTA from './(app)/CTA'
import Footer from './(app)/Footer'

function page() {
  return (
    <div>
      <HeroSectionOne />
      <Features />
      <Stats />
      <Benefits />
      <InfiniteMovingCardsDemo />
      <PricingDemo />
      <CTA />
      <ContactDemo />
      <Footer />
    </div>
  )
}

export default page
