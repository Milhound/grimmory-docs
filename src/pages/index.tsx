import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, {JSX} from 'react';
import HomepageFeatures from './HomepageFeatures';
import HomepageHeader from './HomepageHeader';
import CallToAction from './CallToAction';
import AboutSection from './AboutSection';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Organize knowledge. Preserve lore.">
      <HomepageHeader/>
      <main>
        <AboutSection/>
        <div className={styles.sectionDivider} role="presentation" aria-hidden="true"></div>
        <HomepageFeatures/>
        <CallToAction/>
      </main>
    </Layout>
  );
}
