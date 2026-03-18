"use client";

import dynamic from "next/dynamic";
import type { ReactNode, ComponentType } from "react";

// Lazy load framer-motion to avoid SSR issues during static generation
const LazyMotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div as unknown as ComponentType<Record<string, unknown>>),
  { ssr: false }
);

const LazyMotionP = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.p as unknown as ComponentType<Record<string, unknown>>),
  { ssr: false }
);

export function MotionDiv({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <LazyMotionDiv className={className} {...props}>
      {children}
    </LazyMotionDiv>
  );
}

export function MotionP({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <LazyMotionP className={className} {...props}>
      {children}
    </LazyMotionP>
  );
}
