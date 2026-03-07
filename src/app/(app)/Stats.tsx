"use client";

import React from "react";

const stats = [
  { value: "100K+", label: "Active Users" },
  { value: "50M+", label: "Assets Processed" },
  { value: "150+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export default function Stats() {
  return (
    <section style={{ background: "#121212" }} className="text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-px md:grid-cols-4 border border-white/[0.06] rounded-xl overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 text-center hover:bg-white/[0.03] transition-colors duration-200"
              style={{
                borderRight:
                  index < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
              }}
            >
              <div className="text-3xl font-semibold tracking-tight text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
