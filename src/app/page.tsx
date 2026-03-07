import React from "react";
import { HeroSectionOne } from "./(app)/hero";
import { InfiniteMovingCardsDemo } from "./(app)/infiniteMovementCard";
import { PricingDemo } from "./(app)/Pricing";
import ContactDemo from "./(app)/Contact";
import Features from "./(app)/Features";
import Stats from "./(app)/Stats";
import Benefits from "./(app)/Benefits";
import CTA from "./(app)/CTA";
import Footer from "./(app)/Footer";

function page() {
  return (
    <div style={{ background: "#121212" }}>
      <div className="relative mx-auto flex max-w-7xl flex-col">
        {/* Left hatched border */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden sm:block z-10 -translate-x-14 h-full w-10 sm:w-14 border-r border-white/10"
          style={{
            background:
              "repeating-linear-gradient(315deg,rgba(255,255,255,0.1) 0px,rgba(255,255,255,0.1) 1px,transparent 1px,transparent 10px)",
          }}
        />

        {/* Right hatched border */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden sm:block z-10 translate-x-14 h-full w-10 sm:w-14 border-l border-white/10"
          style={{
            background:
              "repeating-linear-gradient(315deg,rgba(255,255,255,0.1) 0px,rgba(255,255,255,0.1) 1px,transparent 1px,transparent 10px)",
          }}
        />

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
    </div>
  );
}

export default page;
