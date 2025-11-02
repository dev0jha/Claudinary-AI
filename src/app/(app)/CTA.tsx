"use client"

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="rounded-xl border border-border bg-card p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight mb-4">
            Ready to Transform Your Media?
          </h2>
          <p className="text-base text-muted-foreground md:text-lg mb-8 max-w-2xl mx-auto">
            Start optimizing, transforming, and delivering your images and videos with the power of AI and cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/sign-up">
              <button className="btn btn-primary btn-lg w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/home">
              <button className="btn btn-outline btn-lg w-full sm:w-auto">
                View Demo
              </button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </section>
  )
}
