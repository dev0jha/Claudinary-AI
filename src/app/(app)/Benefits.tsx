"use client";

import React from "react";

const benefits = [
  {
    title: "Automatic Optimization",
    description:
      "Our AI automatically selects the best format, quality, and compression for your media.",
  },
  {
    title: "Global CDN Delivery",
    description:
      "Deliver your content faster with our worldwide content delivery network.",
  },
  {
    title: "Real-time Transformations",
    description:
      "Transform images and videos on-the-fly with URL-based parameters.",
  },
  {
    title: "Smart Cropping",
    description:
      "AI-powered cropping that focuses on the most important parts of your images.",
  },
  {
    title: "Video Compression",
    description:
      "Reduce file sizes by up to 70% while maintaining excellent quality.",
  },
  {
    title: "Social Media Ready",
    description:
      "Perfect aspect ratios and formats for all social media platforms.",
  },
];

export default function Benefits() {
  return (
    <section style={{ background: "#121212" }} className="text-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Why Claudinary?
          </h2>
          <p className="mt-3 text-sm text-white/40 max-w-md">
            Next-generation media management with AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-4 border-b border-white/[0.06]"
            >
              <span className="mt-0.5 text-white/20 text-xs font-mono select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
