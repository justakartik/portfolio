'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const roles = [
    "Student",
    "Full Stack Developer",
    "Editor",
    "DevOps Enthusiast",
    "Freelancer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Trigger "out" animation
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsAnimating(false); // Trigger "in" animation after text change
      }, 1000); // Match the animation duration (1s)
    }, 2000); // Total cycle time (2s)
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-900 to-transparent p-4">
      <div className="mb-8">
        <Image
          src="https://avatars.githubusercontent.com/u/125666491?v=4"
          alt="Your Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-white md:text-6xl">
        Hi, I&apos;m <span className="text-blue-400">JustaKartik</span>
      </h1>
      <p className="text-xl mb-8 text-gray-300 md:text-2xl">
        <span className="relative block h-8 overflow-hidden">
          A Passionate{" "}
          <span
            className={`inline-block ${
              isAnimating ? "animate-slideUpOut" : "animate-slideUpIn"
            }`}
            key={currentRoleIndex}
          >
            {roles[currentRoleIndex]}
          </span>
        </span>
      </p>
      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
        <a href="#contact" className="px-8 py-3 text-lg">
          Get in Touch
        </a>
      </Button>
    </section>
  );
}
