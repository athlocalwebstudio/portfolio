"use client"

import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import styles from "../styles/Footer.module.css";

function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Divider */}
      <div className={styles.divider}></div>

      <footer
        id="contact"
        ref={footerRef}
        className={`${styles.footer} ${visible ? styles.visible : ""}`}
      >
        {/* Subtle heading */}
        <h2 className={styles.heading}>Let’s Work Together</h2>

        <div className={styles.icons}>
          <a href="https://www.instagram.com/athlocalwebstudio/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a href="mailto:athlocalwebstudio@gmail.com">
            <FaEnvelope />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <SiFiverr />
          </a>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} AthLocalWebStudio. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;