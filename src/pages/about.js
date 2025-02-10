import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";

const About = () => {
  return (
    <Layout title="About Hexadocs">
      <main className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h1 className={styles.title}>👋 Hey there!</h1>
          <h2 style={{ background: "red" }}>
            The Document is Still in Developemnt. You may see develop branch but
            it is not an offical release.
          </h2>
          <section className={styles.section}>
            <h2>What's This All About?</h2>
            <p>
              Welcome to Hexadocs! I built this project because I remember how
              overwhelming web development felt when I first started. This is
              basically the resource I wish I had when I was learning - no fancy
              jargon, just straight-up practical stuff that actually makes
              sense.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Cool Things You'll Find Here</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>🎯 Zero to Hero Path</h3>
                <p>
                  I've mapped out everything from your first HTML tag to
                  building awesome JavaScript apps. Don't worry, we'll take it
                  step by step!
                </p>
              </div>
              <div className={styles.feature}>
                <h3>💻 Real Stuff</h3>
                <p>
                  No theoretical mumbo-jumbo here. We'll build actual things you
                  can show off to your friends (and future employers 😉).
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>How We'll Do This</h2>
            <p>We'll tackle three main areas (trust me, it's all you need):</p>
            <ul className={styles.pillars}>
              <li>🏗️ HTML - Making things exist</li>
              <li>🎨 CSS - Making things pretty</li>
              <li>⚡ JavaScript - Making things happen</li>
            </ul>
            <p>
              Don't stress if none of that makes sense yet. That's literally why
              I made this site!
            </p>
          </section>

          <section className={styles.section}>
            <h2>Ready to Jump In?</h2>
            <p>
              If you're thinking "okay, this sounds fun" - awesome! Head over to
              the{" "}
              <a href="/docs/category/getting-started">getting started guide</a>{" "}
              and let's build some cool stuff together. And hey, if you get
              stuck, that's totally normal. We've all been there! 🚀
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default About;
