"use client"

import React from 'react'
import { TrendingUp, Users, Globe, Zap } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: "100K+",
    label: "Active Users",
    description: "Trusted by creators worldwide"
  },
  {
    icon: Zap,
    value: "50M+",
    label: "Assets Processed",
    description: "Images and videos transformed"
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries",
    description: "Global CDN coverage"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable and always available"
  }
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Trusted by Thousands
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Join the community of creators and businesses using our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-card-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-card-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
