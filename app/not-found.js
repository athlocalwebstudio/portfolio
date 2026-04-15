// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        
        <div style={styles.badge}>404</div>

        <h1 style={styles.title}>Page not found</h1>

        <p style={styles.text}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link href="/" style={styles.button}>
          Go back home
        </Link>

        <p style={styles.small}>
          If you think this is a mistake, try checking the URL.
        </p>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "20px",
  },

  card: {
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "50px 30px",
    maxWidth: "420px",
    color: "#fff",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },

  badge: {
    fontSize: "14px",
    letterSpacing: "2px",
    color: "#94a3b8",
    marginBottom: "10px",
  },

  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },

  text: {
    fontSize: "15px",
    color: "#cbd5e1",
    marginBottom: "25px",
    lineHeight: "1.5",
  },

  button: {
    display: "inline-block",
    padding: "12px 20px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.2s ease",
  },

  small: {
    fontSize: "12px",
    color: "#64748b",
    marginTop: "20px",
  },
};