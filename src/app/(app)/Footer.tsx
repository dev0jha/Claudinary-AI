"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{ background: "#121212" }}
      className="text-white border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-5 rounded-full bg-white/10" />
              <span className="text-sm font-semibold tracking-tight">
                Claudinary AI
              </span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Transform and optimize your media with AI-powered cloud
              infrastructure.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold text-white/60 uppercase tracking-widest">
              Product
            </h3>
            <ul className="space-y-2">
              {[
                ["Videos", "/home"],
                ["Social Share", "/social-share"],
                ["Upload", "/video-upload"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold text-white/60 uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-2">
              {["About", "Pricing", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold text-white/60 uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/dev0jha" },
                { icon: Twitter, href: "https://twitter.com/dev0jha" },
                { icon: Linkedin, href: "https://linkedin.com/in/devhariojha" },
                { icon: Mail, href: "mailto:ojha6773@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/60 transition-colors duration-150"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Claudinary AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs text-white/20 hover:text-white/50 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
