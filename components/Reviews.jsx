"use client"

import { useState, useEffect } from "react";
import styles from "../styles/Reviews.module.css";
import ReviewsCard from "./ReviewCard";

const reviewsData = [
  {
    name: "Ilias Kot",
    title: " TikTok Game Developer",
    rating: 5,
    text: "The website made my games look much more professional and organized. It helped me direct traffic from TikTok to one clear page, and I’ve already made sales through it."
  },
  {
    name: "Maria K.",
    title: "Local Boutique Owner",
    rating: 4,
    text: "Before, my orders were messy DMs. Now everything looks professional and customers know exactly how to order. It made a big difference."
  },
  {
    name: "Giorgos T.",
    title: "Streetwear Reseller",
    rating: 5,
    text: "I didn’t realize how much trust a clean website builds. Customers stopped asking if I was legit and started ordering with confidence. The process became way smoother."
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextReview = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % reviewsData.length);
      setFade(true);
    }, 300);
  };

  const prevReview = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) =>
        prev === 0 ? reviewsData.length - 1 : prev - 1
      );
      setFade(true);
    }, 300);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <h2 className={styles.title}>Client Reviews</h2>
        <p className={styles.subtitle}>
          What people say about working with me
        </p>

        <div className={styles.carousel}>
          <button onClick={prevReview} className={styles.arrow}>
            ‹
          </button>

          <div className={`${styles.cardWrapper} ${fade ? styles.fadeIn : styles.fadeOut}`}>
            <ReviewsCard {...reviewsData[index]} />
          </div>

          <button onClick={nextReview} className={styles.arrow}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}