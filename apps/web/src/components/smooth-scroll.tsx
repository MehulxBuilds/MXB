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

  const scrollY = useMotionValue(0);

  const springY = useSpring(scrollY, {
    damping: 50,
    stiffness: 300,
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

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const update = () => {
      setContentHeight(content.scrollHeight);
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(content);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      scrollY.set(container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
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
          className="w-full pointer-events-auto"
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
