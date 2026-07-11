"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    window.__lenis = lenis;
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Toaster theme="dark" position="bottom-right" richColors />
      {children}
    </>
  );
}
