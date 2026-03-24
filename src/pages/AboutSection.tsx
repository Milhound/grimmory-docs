import React from 'react';
import styles from './index.module.css';

const aboutCards = [
  {
    title: 'Community-First Foundation',
    description:
      'Grimmory is a community-driven, self-hosted digital library platform built around openness, ownership, and long-term sustainability.',
  },
  {
    title: 'Early and Actively Evolving',
    description:
      'The project is still getting established, and roadmap priorities are being shaped now through real feedback and usage.',
  },
  {
    title: 'Contributions Are Welcome',
    description:
      "Community engagement is welcome! Whether it's across code, testing, docs, design, issue triage, or discussion. Join us today and help shape the future of Grimmory!",
  },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>What Is Grimmory?</h2>
          <div className={`row ${styles.featuresRow}`} style={{justifyContent: 'center'}}>
            {aboutCards.map((card) => (
              <div key={card.title} className="col col--4">
                <article className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>{card.title}</h3>
                  <p className={styles.featureDescription}>{card.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
