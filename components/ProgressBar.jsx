"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "../styles/ProgressBar.module.css";

export default function ProgressBar() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const startLoading = () => {
      // Show bar with small delay to avoid flash on fast loads
      timeoutId = setTimeout(() => setVisible(true), 150);
      setProgress(20); // initial progress
    };

    const finishLoading = () => {
      setProgress(100); // complete bar
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300); // fade out smoothly
      clearTimeout(timeoutId);
    };

    const handleRouteChangeStart = () => startLoading();
    const handleRouteChangeComplete = () => finishLoading();
    const handleRouteChangeError = () => finishLoading();

    // Subscribe to router events
    router.events?.on?.("routeChangeStart", handleRouteChangeStart);
    router.events?.on?.("routeChangeComplete", handleRouteChangeComplete);
    router.events?.on?.("routeChangeError", handleRouteChangeError);

    return () => {
      clearTimeout(timeoutId);
      router.events?.off?.("routeChangeStart", handleRouteChangeStart);
      router.events?.off?.("routeChangeComplete", handleRouteChangeComplete);
      router.events?.off?.("routeChangeError", handleRouteChangeError);
    };
  }, [router.events]);

  return (
    visible && (
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    )
  );
}
