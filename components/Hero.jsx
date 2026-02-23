"use client";

import styles from "../styles/Hero.module.css";

export default function Hero() {
  const headline = "Your Business Deserves a Better Website.";
  const subheading = "Professional websites that tell your story, impress visitors, and increase customer trust.";

  const headlineWords = headline.split(" ");
  const subheadingWords = subheading.split(" ");

  return (
    <section className={styles.hero} id="home">
      <div className={styles.logoContainer}>
        <img src="/images/hero_logo.png" alt="Local Web Studios Logo" className={styles.logo} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.headline}>
          {headlineWords.map((word, idx) => (
            <span key={idx} style={{ "--i": idx }}>{word}&nbsp;</span>
          ))}
        </h1>
        <p className={styles.subheading}>
          {subheadingWords.map((word, idx) => (
            <span key={idx} style={{ "--i": idx }}>{word}&nbsp;</span>
          ))}
        </p>
        <a href="#contact" className={styles.cta}>
          Contact Us
        </a>
      </div>
    </section>
  );
}
