"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Inter } from 'next/font/google';
import { ChevronRight } from "lucide-react";// Ikon recycle untuk kartu di atas gambar

// Konfigurasi Font
const inter = Inter({ subsets: ['latin'] });

export default function section3() {
  const { ref } = useSectionInView("Technology");
  // Data untuk 4 Kolom agar kodenya lebih bersih (DRY)
  const courses = [
    {
      title: "Basic Computer Networking",
      category: "Technology",
      description:
        "Learn the fundamentals of IP addressing, routing, and network configuration through hands-on practice.",
      image: "https://placehold.co/800x600?text=Computer+Networking+Class",
    },
    {
      title: "UI/UX Design Essentials",
      category: "Design",
      description:
        "Master the core principles of modern interface design and build real projects to sharpen your skills.",
      image: "https://placehold.co/800x600?text=UI%2FUX+Design+Class",
    },
    {
      title: "English Communication Skills",
      category: "Language",
      description:
        "Improve your speaking, listening, and everyday English communication for students and beginners.",
      image: "https://placehold.co/800x600?text=English+Class",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="technology"
    >
      <section className={`w-full py-16 md:py-24  ${inter.className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <h2 className="text-3xl font-semibold text-black">Popular Courses</h2>
          
          <button className="bg-slate-200 text-blue-700 text-sm font-semibold px-6 py-2 rounded-full flex items-center gap-2 hover:bg-slate-300 transition">
            View All
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Active Tab Indicator */}
        <div className="mb-10">
          <span className="text-blue-700 text-base font-semibold border-b-4 border-blue-700 pb-2">
            Popular
          </span>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
            >
              {/* Image + Category Badge */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 bg-zinc-300 bg-opacity-50 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm">
                  {course.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-xs leading-5 flex-grow mb-8">
                  {course.description}
                </p>
                <a
                  href="#"
                  className="text-blue-700 text-base font-semibold self-end hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </motion.section>
  );
}
