import clsx from 'clsx'; 
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
  link: string;
  docs: string;
  brandColor: string;
  gradient: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'EasyThreads',
    imgSrc: require('@site/static/img/brand/easythreads_logo.png').default,
    description: (
      <>
        Powerful Discord thread management with autothreading, ticket systems, and advanced automation features.
      </>
    ),
    link: 'https://ezsys.link/threads',
    docs: '/docs/easythreads/intro',
    brandColor: '#4ea4df',
    gradient: 'linear-gradient(135deg, #4ea4df 0%, #2d7dd2 100%)',
  },
  {
    title: 'EasyLevel',
    imgSrc: require('@site/static/img/brand/easylevel_logo.png').default,
    description: (
      <>
        Customize every aspect of your Discord leveling experience with our comprehensive leveling system.
      </>
    ),
    link: 'https://ezsys.link/level',
    docs: '/docs/easylevel/intro',
    brandColor: '#98ce86',
    gradient: 'linear-gradient(135deg, #98ce86 0%, #6bbf6b 100%)',
  },
  {
    title: 'EasyVoice',
    imgSrc: require('@site/static/img/brand/easyvoice_logo.png').default,
    description: (
      <>
        Create temporary voice channels automatically with our intelligent voice channel management system.
      </>
    ),
    link: 'https://ezsys.link/voice',
    docs: '/docs/easyvoice/intro',
    brandColor: '#a1a7f6',
    gradient: 'linear-gradient(135deg, #a1a7f6 0%, #7c82f0 100%)',
  },
  {
    title: 'EasyYAUDAB',
    imgSrc: require('@site/static/img/brand/easyyaudab_logo.png').default,
    description: (
      <>
        Your AI companion for Discord! Chat, generate images, translate, and more with our intelligent bot.
      </>
    ),
    link: 'https://ezsys.link/yaudab',
    docs: '/docs/easyyaudab/intro',
    brandColor: '#f16aec',
    gradient: 'linear-gradient(135deg, #f16aec 0%, #d63384 100%)',
  },
];

function Feature({title, imgSrc, description, link, docs, brandColor, gradient}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.cardHeader}>
        <div className={styles.imageContainer}>
          <img src={imgSrc} className={styles.featureImage} alt={title} />
          <div className={styles.imageGlow} style={{ background: gradient }}></div>
        </div>
        <div className={styles.badge} style={{ background: gradient }}>
          {title}
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <p className={styles.description}>{description}</p>
      </div>
      
      <div className={styles.cardActions}>
        <a 
          href={link} 
          className={styles.addToServerButton}
          style={{ background: gradient }}
        >
          <span>Add to Server</span>
          <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a 
          href={docs} 
          className={styles.docsButton}
          style={{ borderColor: brandColor, color: brandColor }}
        >
          <span>Documentation</span>
          <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
        </a>
      </div>
      
      <div className={styles.cardBackground} style={{ background: gradient }}></div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}