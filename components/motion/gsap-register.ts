import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function registerGsap() {
  if (isRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
