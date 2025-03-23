"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classes from "./progress.module.css";

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.tagName === "A" ? target : target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");

      // ✅ Prevent progress bar from running if clicking the same route
      if (!href || href === pathname) return;

      setIsVisible(true);
      setProgress(10);

      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 90 ? 90 : prev + 15));
      }, 300);

      return () => clearInterval(interval);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  useEffect(() => {
    if (progress > 0) {
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
        setIsVisible(false);
      }, 100);
    }
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className={classes.loadingContainer}>
      <div
        className={classes.loadingBar}
        style={{
          width: `${progress}%`,
          transition: progress === 100 ? "width 0.2s ease-out" : "width 1s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
