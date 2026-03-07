"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      style={{ background: "#121212" }}
      className="flex flex-col items-center justify-center overflow-hidden py-16"
    >
      <div className="mx-auto max-w-5xl px-6 w-full mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          What people say
        </h2>
        <p className="mt-3 text-sm text-white/40">
          Voices from creators and developers who use Claudinary.
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, I thought I would sail about a little.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
