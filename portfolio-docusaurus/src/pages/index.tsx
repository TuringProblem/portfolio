import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useParallaxTransform } from '@site/src/hooks/useParallax';

import styles from './index.module.css';

function ParallaxBackground() {
  const bgTransform = useParallaxTransform(0.3);
  const shapeTransform = useParallaxTransform(0.6);

  return (
    <div className={styles.parallaxBackground}>
      <div
        className={styles.backgroundLayer}
        style={{ transform: bgTransform }}
      />
      <div
        className={styles.floatingShapes}
        style={{ transform: shapeTransform }}
      >
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const titleTransform = useParallaxTransform(0.2);
  const subtitleTransform = useParallaxTransform(0.4);
  const buttonTransform = useParallaxTransform(0.1);

  return (
    <header className={clsx('hero', styles.parallaxHero)}>
      <ParallaxBackground />
      <div className={styles.heroContent}>
        <div className="container">
          <div
            className={styles.titleWrapper}
            style={{ transform: titleTransform }}
          >
            <Heading as="h1" className={clsx('hero__title', styles.parallaxTitle)}>
              {siteConfig.title}
            </Heading>
          </div>
          <div
            className={styles.subtitleWrapper}
            style={{ transform: subtitleTransform }}
          >
            <p className={clsx('hero__subtitle', styles.parallaxSubtitle)}>
              {siteConfig.tagline}
            </p>
          </div>
          <div
            className={styles.buttonsWrapper}
            style={{ transform: buttonTransform }}
          >
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.parallaxButton)}
                to="/docs/projects/Atoms">
                View My Projects 🚀
              </Link>
              <Link
                className={clsx('button button--primary button--lg', styles.parallaxButton)}
                to="/intro">
                About Me 👋
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
