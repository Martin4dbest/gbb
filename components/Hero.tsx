"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gd.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="container-custom px-5 sm:px-8 lg:px-12">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              leading-tight
              max-w-4xl
              text-yellow-400
            "
          >
            Building Excellence in Construction & Engineering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              max-w-2xl
              mt-5
              text-base
              sm:text-lg
              md:text-xl
              text-white/90
              leading-relaxed
            "
          >
            We deliver world-class construction, architectural design,
            plumbing, electrical installations, furniture works, interlocking,
            fencing, and industrial cleaning services across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="
                bg-yellow-500
                hover:bg-yellow-600
                text-black
                px-6
                py-3
                rounded-lg
                font-semibold
                text-center
                transition-all
                shadow-lg
              "
            >
              Get Free Quote
            </Link>

            <Link
              href="/projects"
              className="
                border
                border-yellow-400
                text-yellow-400
                hover:bg-yellow-400
                hover:text-black
                px-6
                py-3
                rounded-lg
                font-semibold
                text-center
                transition-all
              "
            >
              View Projects
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}