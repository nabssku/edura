"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Work_Sans, Inter } from 'next/font/google';
import {
  Star,
  GraduationCap,
  BookOpen,
  Video,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useSectionInView } from "@/lib/hooks";


// Konfigurasi Font Google (Next.js Optimization)
const workSans = Work_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className={`w-full py-16 md:py-24  ${inter.className}`}
    >

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10 order-2 lg:order-1">
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 rounded-full p-2">
                <Star className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium">
                <span className="font-bold text-black">4.8</span>{" "}
                <span className="text-gray-600">Excellent Rating</span>{" "}
                <span className="font-bold text-black">· 1,200+</span>{" "}
                <span className="text-gray-600">Students</span>
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-blue-700 leading-tight">
              Turn Learning<br />Into Real Progress
            </h1>

            <p className="text-lg text-gray-500">
              Job-ready skills. Real progress. Clear learning paths.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <GraduationCap className="h-8 w-8 text-blue-700 flex-shrink-0" />
                <p className="text-lg font-medium">Expert-Led Courses</p>
              </div>
              <div className="flex items-center gap-5">
                <BookOpen className="h-8 w-8 text-blue-700 flex-shrink-0" />
                <p className="text-lg font-medium">Structured Learning Materials</p>
              </div>
              <div className="flex items-center gap-5">
                <Video className="h-8 w-8 text-blue-700 flex-shrink-0" />
                <p className="text-lg font-medium">Free Trial for New Students</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black text-white font-medium px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-gray-900 transition">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-gray-400 text-black font-medium px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:border-gray-600 transition">
                Browse Courses
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm font-medium text-black">No credit card required.</p>
          </div>

          {/* Right Column - Image + Overlays */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Image container dengan aspect ratio tetap */}
            <div className="w-full max-w-lg aspect-[4/5]">
              <Image
                src="/orangbelajar.png"
                alt="Eduram Learning"
                fill
                className="object-cover rounded-[2vw]"
              />
            </div>

            {/* Daily Study Progress Card */}
            <div className="absolute top-8 -left-20 -translate-x-1/2 lg:translate-x-0 w-80 bg-white rounded-3xl shadow-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-8 w-8 text-blue-700" />
                <h3 className="text-xl font-semibold">Daily Study Progress</h3>
              </div>
              <div className="relative bg-gray-200 rounded-full h-12 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-9/12 bg-blue-700"></div>
                <div className="absolute inset-0 flex items-center justify-start pl-3 pr-3">
                  <div className="flex -space-x-3">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=male" className="w-10 h-10 rounded-full border-4 border-white" />
                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" className="w-10 h-10 rounded-full border-4 border-white" />
                    <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" className="w-10 h-10 rounded-full border-4 border-white" />
                  </div>
                  <p className="ml-3 text-xs font-medium text-white">
                    Your Class<br /><span className="font-bold">30+ Students</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Score Card */}
            <div className="absolute bottom-8 left-0 -translate-x-1/2 w-72 bg-blue-700 text-white rounded-3xl shadow-2xl p-8 text-center">
              <p className="text-2xl font-semibold mb-2">Your Learning Score</p>
              <p className="text-7xl font-bold">
                85<span className="text-3xl opacity-80">/100</span>
              </p>
            </div>

            {/* Floating Action Buttons */}
            <div className="absolute top-4 -right-20 sm:top-1 space-y-3">
              <div className="bg-white border-2 border-blue-700 rounded-3xl px-6 py-3 flex items-center justify-between gap-4 shadow-lg">
                <span className="font-medium">Free Study Consultation</span>
                <CheckCircle className="h-8 w-8 text-blue-700" />
              </div>
              <div className="absolute bg-white border-2 border-blue-700 rounded-3xl -right-10 px-6 py-3 flex items-center justify-between gap-4 shadow-lg">
                <span className="font-medium">Join Live Study Session</span>
                <CheckCircle className="h-8 w-8 text-blue-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
