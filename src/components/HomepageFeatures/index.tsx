import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { useParallaxTransform } from '@site/src/hooks/useParallax';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Full-Stack Developer',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Building modern web applications with React, TypeScript, and Node.js.
        Experience with both frontend and backend development.
      </>
    ),
  },
  {
    title: 'Computer Science Student',
    Svg: require('@site/static/img/neu.svg').default,
    description: (
      <>
        Currently studying Computer Science at Northeastern University.
        Passionate about compilers, programming languages, and mathematics.
      </>
    ),
  },
  {
    title: 'Open Source Contributor',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Active contributor to open source projects and passionate about
        building tools that help other developers.
      </>
    ),
  },
];

function FeatureSection({ title, Svg, description, index }: FeatureItem & { index: number }) {
  const isLeft = index % 2 === 0;
  const backgroundTransform = useParallaxTransform(0.2);
  const contentTransform = useParallaxTransform(0.05);
  const iconTransform = useParallaxTransform(0.1);
  const shadowLogoTransform = useParallaxTransform(0.3);

  const getEnvironmentClass = () => {
    switch (index) {
      case 0: return styles.devEnvironment;
      case 1: return styles.academicEnvironment;
      case 2: return styles.openSourceEnvironment;
      default: return styles.devEnvironment;
    }
  };

  return (
    <section className={clsx(styles.featureEnvironment, getEnvironmentClass())}>
      <div
        className={styles.environmentBackground}
        style={{ transform: backgroundTransform }}
      />

      {/* Shadow Logo - Completely separate */}
      <div
        className={clsx(styles.shadowLogoContainer, isLeft ? styles.shadowRight : styles.shadowLeft)}
      >
        <Svg className={styles.shadowLogo} role="img" aria-hidden="true" />
      </div>

      {/* Content Card - Independent positioning */}
      <div className="container">
        <div className={clsx(styles.featureContent, isLeft ? styles.contentLeft : styles.contentRight)}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <Heading as="h2" className={styles.environmentTitle}>{title}</Heading>
              <p className={styles.environmentDescription}>{description}</p>
            </div>
            <div
              className={styles.iconContainer}
              style={{ transform: iconTransform }}
            >
              <Svg className={styles.environmentIcon} role="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <FeatureSection key={idx} {...props} index={idx} />
      ))}
    </>
  );
}
