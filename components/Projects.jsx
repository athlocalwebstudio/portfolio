import styles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>
          Interactive previews of my recent work
        </p>

        <div className={styles.grid}>
          <ProjectCard
            image="/images/Hero.jpg"
            title="Modern Landing page"
            description="Responsive Hero built with React."
          />
          <ProjectCard
            image="/images/Games.jpg"
            title="Work Show"
            description="Clean UI showing the clients projects."
          />
          <ProjectCard
            image="/images/Navbar.jpg"
            title="Responsive Menu"
            description="Smooth Hamburger Menu helping user navigation."
          />
          <ProjectCard
            image="/images/Faqs.jpg"
            title="Clean FAQs page"
            description="Interactive layout answering common questions."
          />
        </div>
      </div>
    </section>
  );
}