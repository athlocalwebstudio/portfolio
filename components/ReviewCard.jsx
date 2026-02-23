import styles from "../styles/ReviewCard.module.css";

export default function ReviewsCard({ name, title, rating, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            {name.charAt(0)}
          </div>
          <div>
            <h3>{name}</h3>
            <span>{title}</span>
          </div>
        </div>

        <div className={styles.stars}>
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>
      </div>

      <p className={styles.reviewText}>
        “{text}”
      </p>
    </div>
  );
}