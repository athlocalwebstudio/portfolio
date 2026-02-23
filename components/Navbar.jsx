"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About Me", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <a href="#home">
          <img src="/images/local_web_studio_logo.png" alt="Local Web Studios Logo" />
        </a>
      </div>

      {/* Desktop Links */}
      <nav className={styles.navLinks}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className={styles.desktopLink}>
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ""}`}
      >
        <button className={styles.closeBtn} onClick={closeMenu}>
          &times;
        </button>
        <div className={styles.mobileLinks}>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileLink}
              style={{ "--i": idx }}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
