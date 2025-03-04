/**
 * Desktop Detection Hook
 *
 * A custom hook that detects whether the current viewport is desktop-sized.
 * Uses a responsive breakpoint of 1280px to determine desktop vs mobile.
 */
import { useEffect, useState, useCallback } from "react";

// Define breakpoint as a constant to make updates easier
const DESKTOP_BREAKPOINT = 1280; // pixels

/**
 * Hook to detect if the current viewport is desktop size
 *
 * @returns boolean indicating whether viewport is desktop size
 */
export default function useIsDesktop(): boolean {
  // Initialize with current window width
  const [isDesktop, setIsDesktop] = useState(() => {
    // Handle SSR case where window might not be available
    if (typeof window === "undefined") return false;
    return window.innerWidth >= DESKTOP_BREAKPOINT;
  });

  // Memoize the resize handler to prevent recreation on each render
  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]); // Only recreate effect if handleResize changes

  return isDesktop;
}
