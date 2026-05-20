"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

type Props = {
  isRTL?: boolean;
};

export default function ScrollToTopWithProgress({ isRTL = false }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 z-50 w-14 h-14 rounded-full cursor-pointer border-2 border-divider overflow-hidden shadow-lg bg-surface-card flex items-center justify-center group transition-transform hover:scale-110 ${
        isRTL ? "left-6" : "right-6"
      }`}
      aria-label="Scroll to top"
    >
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <div
          className="w-full relative"
          style={{ height: `${scrollProgress}%` }}
        >
          <svg
            className="absolute bottom-0 w-full h-4 animate-wave"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 20 Q 25 0 50 20 T 100 20 V 100 H 0 Z"
              fill="var(--brand-orange-wave)"
              opacity="0.6"
            />
          </svg>
          <div className="bg-brand-to w-full h-full"></div>
        </div>
      </div>

      <ArrowUp className="relative z-10 text-text-primary w-5 h-5 transition-colors duration-200" />
    </button>
  );
}
