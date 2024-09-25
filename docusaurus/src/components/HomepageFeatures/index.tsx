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
};

const FeatureList: FeatureItem[] = [
  {
    title: 'EasyThreads',
    imgSrc: require('@site/static/img/brand/easythreads_logo.png').default,
    description: (
      <>
        EasyThreads can be used for autothreading, moving of threads, ticket-systems and much more!
      </>
    ),
    link: 'https://ezsys.link/threads',
    docs: '/docs/easythreads/intro',
    brandColor: '#4ea4df',
  },
  {
    title: 'EasyLevel',
    imgSrc: require('@site/static/img/brand/easylevel_logo.png').default,
    description: (
      <>
        With EasyLevel you can customize almost every aspect of your Leveling experience with ease.
      </>
    ),
    link: 'https://ezsys.link/level',
    docs: '/docs/easylevel/intro',
    brandColor: '#98ce86',
  },
  {
    title: 'EasyVoice',
    imgSrc: require('@site/static/img/brand/easyvoice_logo.png').default,
    description: (
      <>
        EasyVoice is the best app for temporary Voice Channels!
      </>
    ),
    link: 'https://ezsys.link/voice',
    docs: '/docs/easyvoice/intro',
    brandColor: '#a1a7f6',
  },
  {
    title: 'EasyYAUDAB',
    imgSrc: require('@site/static/img/brand/easyyaudab_logo.png').default,
    description: (
      <>
        Hello! Chat with EasyYAUDAB by mentioning him and writing your message!
      </>
    ),
    link: 'https://ezsys.link/yaudab',
    docs: '/docs/easyyaudab/intro',
    brandColor: '#f16aec',
  },
];

function Feature({title, imgSrc, description, link, docs, brandColor}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <a 
          href={link} 
          className={`button ${styles.addToServerButton}`}
          style={{
            backgroundColor: brandColor,
          }}
        >
          Add to Server
        </a>
        <a 
          href={docs} 
          className={`button ${styles.docsButton}`} 
          style={{
            borderColor: brandColor,
            color: brandColor,
          }}
        >
          VIEW DOCUMENTATION
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}