import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <section className={styles.heroBanner}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
                <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
                <div className={styles.heroButtons}>
                  <Link className={styles.primaryButton} to="/docs/intro">
                    Get Started
                  </Link>
                  <Link
                    className={styles.secondaryButton}
                    to="https://github.com/your-repo"
                  >
                    View on GitHub
                  </Link>
                </div>
              </div>
              <div className={styles.heroImage}>
                <img src="img/logo.png" alt="Hero" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
