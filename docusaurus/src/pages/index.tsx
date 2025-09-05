import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CustomLayout from '@site/src/components/CustomLayout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import LatestBlog from '@site/src/components/LatestBlog';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      {/* floating elements */}
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>
      
      <div className={styles.heroContent}>
        <Heading 
          as="h1" 
          className={styles.heroTitle} 
          data-text={siteConfig.title}
        >
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.ctaButton}
            to="/docs/intro">
            🚀 Get Started - 5 min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <CustomLayout>
      <HomepageHeader />
      <main className={styles.mainContent}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Our Amazing Apps
          </Heading>
          <HomepageFeatures />
          
          <Heading as="h2" className={styles.sectionTitle}>
            Latest Updates
          </Heading>
          <LatestBlog />
        </div>
      </main>
    </CustomLayout>
  );
}