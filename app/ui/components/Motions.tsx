"use client";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import React from "react";
import Link from "next/link";

type MotionH1Props = HTMLMotionProps<"h1">;

export const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionH1Props>(
  function MotionH1({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    );
  }
);

type MotionH2Props = HTMLMotionProps<"h2">;

export const MotionH2 = React.forwardRef<HTMLHeadingElement, MotionH2Props>(
  function MotionH2({ children, ...props }, ref) {
    return (
      <motion.h2 ref={ref} {...props}>
        {children}
      </motion.h2>
    );
  }
);

type MotionH3Props = HTMLMotionProps<"h3">;

export const MotionH3 = React.forwardRef<HTMLHeadingElement, MotionH3Props>(
  function MotionH3({ children, ...props }, ref) {
    return (
      <motion.h3 ref={ref} {...props}>
        {children}
      </motion.h3>
    );
  }
);

type MotionH4Props = HTMLMotionProps<"h4">;

export const MotionH4 = React.forwardRef<HTMLHeadingElement, MotionH4Props>(
  function MotionH4({ children, ...props }, ref) {
    return (
      <motion.h4 ref={ref} {...props}>
        {children}
      </motion.h4>
    );
  }
);

type MotionDivProps = HTMLMotionProps<"div">;

export const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

type MotionSectionProps = HTMLMotionProps<"section">;

export const MotionSection = React.forwardRef<
  HTMLDivElement,
  MotionSectionProps
>(function MotionSection({ children, ...props }, ref) {
  return (
    <motion.section ref={ref} {...props}>
      {children}
    </motion.section>
  );
});

type MotionParagraphProps = HTMLMotionProps<"p">;

export const MotionP = React.forwardRef<
  HTMLParagraphElement,
  MotionParagraphProps
>(function MotionP({ children, ...props }, ref) {
  return (
    <motion.p ref={ref} {...props}>
      {children}
    </motion.p>
  );
});

type MotionSpanProps = HTMLMotionProps<"span">;

export const MotionSpan = React.forwardRef<HTMLSpanElement, MotionSpanProps>(
  function MotionSpan({ children, ...props }, ref) {
    return (
      <motion.span ref={ref} {...props}>
        {children}
      </motion.span>
    );
  }
);

type MotionAnchorProps = HTMLMotionProps<"a">;

const MotionLinkElement = motion.create(Link);
export const MotionLink = React.forwardRef<
  HTMLAnchorElement,
  MotionAnchorProps
>(function MotionLink({ children, ...props }, ref) {
  return (
    <MotionLinkElement ref={ref} {...props}>
      {children}
    </MotionLinkElement>
  );
});
