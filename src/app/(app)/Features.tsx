"use client"

import React from 'react'
import { Zap, Shield, Cloud, Image as ImageIcon, Video, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimize and transform your media in milliseconds with our powerful cloud infrastructure."
  },
  {
    icon: ImageIcon,
    title: "Smart Image Processing",
    description: "AI-powered image transformations, automatic format selection, and intelligent cropping."
  },
  {
    icon: Video,
    title: "Video Compression",
    description: "Reduce video file sizes by up to 70% without compromising quality."
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure, scalable cloud storage for all your media assets with global CDN delivery."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with industry security standards."
  },
  {
    icon: Sparkles,
    title: "AI Enhancement",
    description: "Automatic background removal, smart filters, and intelligent enhancement."
  }
]

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Powerful Features
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Everything you need to manage, transform, and deliver your media at scale
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary transition-colors duration-300"
            >
              <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
