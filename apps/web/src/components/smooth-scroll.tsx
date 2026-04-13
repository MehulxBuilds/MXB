"use client";

import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

interface SmoothScrollProps {
  children: React.ReactNode;
  className?: string;
}

export interface SmoothScrollHandle {
    scrollTo: (y: number) => void;
    container: HTMLDivElement | null;
}

export const SmoothScroll = forwardRef<SmoothScrollHandle, SmoothScrollProps>(({
  children,
  className = "",
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState(0);

  // Native scroll value
  const scrollY = useMotionValue(0);

  // Smooth spring value tracking the native scroll
  const springY = useSpring(scrollY, {
    damping: 30,
    stiffness: 150,
    mass: 0.1,
  });

  useImperativeHandle(ref, () => ({
    scrollTo: (y: number) => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: y, behavior: 'smooth' });
        }
    },
    container: containerRef.current
  }));

  // Measure content height
  useEffect(() => {
    const update = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [children]);

  // Sync scrollY with container's scroll top
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      scrollY.set(container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const y = useTransform(springY, (v) => -v);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-y-auto ${className} hidden-scrollbar`}
      style={{ scrollBehavior: "auto" }}
    >
      <div className="sticky top-0 w-full h-0 overflow-visible pointer-events-none">
        <motion.div
          ref={contentRef}
          style={{ y }}
          className="w-full pointer-events-auto will-change-transform"
        >
          {children}
        </motion.div>
      </div>

      <div
        style={{ height: contentHeight }}
        className="pointer-events-none w-full"
      />
    </div>
  );
});

SmoothScroll.displayName = "SmoothScroll";