"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeroSectionOne() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navbar />

      <div className="px-4 py-24 md:py-36 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6 inline-block rounded-full border border-white/10 px-4 py-1 text-xs tracking-widest text-white/40 uppercase"
        >
          AI-Powered Media Platform
        </motion.span>

        <h1 className="relative z-10 mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1]">
          {"Generate images with Cloudinary".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="relative z-10 mx-auto mt-6 max-w-lg text-base font-normal text-white/40 leading-relaxed"
        >
          AI-powered image generation from text or existing media, delivering
          optimized, high-quality visuals instantly through cloud
          infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => router.push("/home")}
            className="rounded-md bg-white px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90"
          >
            Explore Now
          </button>
          <button
            onClick={() => router.push("/sign-in")}
            className="rounded-md border border-white/10 px-6 py-2.5 text-sm font-medium text-white/60 transition-all duration-200 hover:border-white/20 hover:text-white/80"
          >
            Sign In
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="relative z-10 mt-20 w-full max-w-4xl"
        >
          <div className="overflow-hidden rounded-xl border border-white/[0.06]">
            <Image
              src="/Claudinary.png"
              alt="Claudinary AI Preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b border-white/[0.06] px-6 py-4">
      <div className="flex items-center gap-2.5">
        <div className="size-6 rounded-full bg-white/10" />
        <span className="text-sm font-semibold text-white tracking-tight">
          Claudinary AI
        </span>
      </div>
      <button
        onClick={() => router.push("/sign-in")}
        className="rounded-md border border-white/10 px-4 py-1.5 text-xs font-medium text-white/60 transition-all duration-200 hover:border-white/20 hover:text-white/80"
      >
        Login
      </button>
    </nav>
  );
};
