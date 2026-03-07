"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section style={{ background: "#121212" }} className="text-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-8">
        <div className="rounded-xl border border-white/[0.06] p-10 md:p-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl mb-4">
            Ready to Transform Your Media?
          </h2>
          <p className="text-sm text-white/40 mb-10 max-w-xl mx-auto leading-relaxed">
            Start optimizing, transforming, and delivering your images and
            videos with the power of AI and cloud infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/sign-up">
              <button className="flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/home">
              <button className="rounded-md border border-white/10 px-6 py-2.5 text-sm font-medium text-white/60 transition-all duration-200 hover:border-white/20 hover:text-white/80">
                View Demo
              </button>
            </Link>
          </div>

          <p className="text-xs text-white/20 mt-8">
            No credit card required · Free forever plan available
          </p>
        </div>
      </div>
    </section>
  );
}
