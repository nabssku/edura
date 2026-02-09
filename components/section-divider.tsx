"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Work_Sans, Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });
export default function SectionDivider() {
  return (
    <motion.div
      className={`w-screen   ${inter.className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <section className="bg-blue-700 py-10">
        <div className="h-32 lg:h-32 flex items-center">
          <div className="max-w-screen-2xl mx-auto w-full px-6 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-white">
              {/* Left side - Features (padding kiri ≈96px pada lg) */}
              <div className="lg:pl-24 space-y-4">
                <p className="text-xl font-semibold">Expert-Led Learning</p>
                <p className="text-xl font-semibold">Structured Study Materials</p>
              </div>

              {/* Right side - Trust & Rating (rata kanan) */}
              <div className="flex flex-col items-center lg:items-end space-y-3">
                <p className="text-xl font-medium">Trusted by</p>

                {/* Rating 4.8 + Stars */}
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-semibold">4.8</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Student count */}
                <p className="text-4xl font-semibold">
                  1,200+{" "}
                  <span className="text-xl font-semibold">Students</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
