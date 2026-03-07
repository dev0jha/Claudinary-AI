"use client";

import React from "react";
import {
  Zap,
  Shield,
  Cloud,
  Image as ImageIcon,
  Video,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimize and transform your media in milliseconds with our powerful cloud infrastructure.",
  },
  {
    icon: ImageIcon,
    title: "Smart Image Processing",
    description:
      "AI-powered image transformations, automatic format selection, and intelligent cropping.",
  },
  {
    icon: Video,
    title: "Video Compression",
    description:
      "Reduce video file sizes by up to 70% without compromising quality.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description:
      "Secure, scalable cloud storage for all your media assets with global CDN delivery.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance with industry security standards.",
  },
  {
    icon: Sparkles,
    title: "AI Enhancement",
    description:
      "Automatic background removal, smart filters, and intelligent enhancement.",
  },
];

export default function Features() {
  return (
    <section style={{ background: "#121212" }} className="text-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-3 text-sm text-white/40 max-w-md">
            Everything you need to manage, transform, and deliver your media at
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px md:grid-cols-3 border border-white/[0.06] rounded-xl overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border-white/[0.06] transition-colors duration-200 hover:bg-white/[0.03]"
              style={{
                borderRight:
                  index % 3 !== 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderBottom:
                  index < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <feature.icon
                className="w-5 h-5 text-white/40 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-sm font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
