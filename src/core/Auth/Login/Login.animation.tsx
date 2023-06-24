"use client";

import { MotionProps } from "framer-motion";

export const FadeInRight: MotionProps = {
  initial: { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
  variants: {
    init: {
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
      transform: "translate3d(0, 0, 0)",
      opacity: 1,
    },
    finish: {
      transition: {
        duration: 0.5,
      },
      transform: "translate3d(-100%, 0, 0)",
      opacity: 0,
    },
  },
};

export const GirlFlyAnimation: MotionProps = {
  transition: {
    delay: 0.5,
    duration: 1,
  },
  initial: {
    transform: "scale(0.8) translateY(-50%)",
    opacity: 0,
  },
  animate: {
    transform: "scale(1) translateY(-50%) translate3d(15%, 0, 0)",
    opacity: 1,
  },
};

export const LoginInitAnimation: MotionProps = {
  variants: {
    init: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    finish: {
      opacity: 0,
      transform: "translateX(50%)",
    },
  },
  initial: {
    opacity: 0,
  },
};

export const LoginBoxRightAnimation: MotionProps = {
  transition: {
    duration: 0.5,
    delay: 0.5,
  },
  initial: {
    transform: "translateX(-60%)",
  },
  animate: {
    transform: "translateX(0px)",
  },
};
