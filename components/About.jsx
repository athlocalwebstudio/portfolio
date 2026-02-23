"use client"

import { useEffect, useRef, useState } from "react";
import styles from "../styles/About.module.css";

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.about} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <div className={styles.textCard}>
              <p className={styles.highlight}>
                I build clean, high-performance web experiences for local businesses that look
                sharp, feel smooth, and work flawlessly on every device.
              </p>

              <p>
                I’m a frontend-focused developer specializing in modern,
                responsive interfaces built with clarity and structure. Every
                layout has purpose. Every interaction feels intentional.
              </p>

              <p>
                I focus on performance, clean code, and conversion-driven
                design. My goal is not just to build websites — but to create
                digital experiences that feel professional and trustworthy.
              </p>

              <p className={styles.footerText}>
                I’m constantly refining my craft — studying modern UI trends,
                improving structure, and pushing toward cleaner, smarter design
                systems.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            <div className={styles.card}>
              <h3>Frontend Development</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>Next.js</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>UI & Experience</h3>
              <ul>
                <li>Clean layout systems</li>
                <li>Mobile-first design</li>
                <li>Micro-interactions</li>
                <li>UX-focused structure</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Tools</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>Component-based workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
