"use client"

import { useState, useEffect } from "react";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ image, title, description }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (!isDesktop) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      onMouseEnter={() => isDesktop && setIsFlipped(true)}
      onMouseLeave={() => isDesktop && setIsFlipped(false)}
    >
      <div className={`${styles.inner} ${isFlipped ? styles.flipped : ""}`}>
        {/* Front */}
        <div className={styles.front}>
          <div className={styles.hint}>
            <span>Tap / Hover to Reveal</span>
          </div>
        </div>

        {/* Back */}
      <div className={styles.back}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} />
        </div>

        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      </div>
    </div>
  );
}
