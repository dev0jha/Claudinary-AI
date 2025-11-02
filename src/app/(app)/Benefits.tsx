"use client"

import React from 'react'
import { Check } from 'lucide-react'

const benefits = [
  {
    title: "Automatic Optimization",
    description: "Our AI automatically selects the best format, quality, and compression for your media."
  },
  {
    title: "Global CDN Delivery",
    description: "Deliver your content faster with our worldwide content delivery network."
  },
  {
    title: "Real-time Transformations",
    description: "Transform images and videos on-the-fly with URL-based parameters."
  },
  {
    title: "Smart Cropping",
    description: "AI-powered cropping that focuses on the most important parts of your images."
  },
  {
    title: "Video Compression",
    description: "Reduce file sizes by up to 70% while maintaining excellent quality."
  },
  {
    title: "Social Media Ready",
    description: "Perfect aspect ratios and formats for all social media platforms."
  }
]

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Why Choose Cloudinary Showcase?
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Experience the next generation of media management with AI-powered tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
