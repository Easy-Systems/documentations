import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EasySystems Documentation',
  tagline: 'Discord Apps made with love.',
  favicon: 'img/favicon.ico',

  url: 'https://easysystems.dev',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/favicon.ico',
    navbar: {
      hideOnScroll: true,
      style: 'dark',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/intro' },
            { label: 'EasyThreads Documentation', to: '/docs/easythreads/intro' },
            { label: 'Become a Contributor', to: '/docs/opensource' },
          ],
        },
        {
          title: 'Helpful Ressources',
          items: [
            { label: 'App Invites', to: '/docs/intro#app-invites' },
            { label: 'App Votes', to: '/docs/intro#app-votes' },
            { label: 'Custom Branding (Premium)', href: 'https://ezsys.link/premium' },
            { label: 'Support Server', href: 'https://ezsys.link/support' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blogs' },
            { label: '𝕏 / Twitter', href: 'https://twitter.com/EasySystemsDev' },
            { label: 'GitHub', href: 'https://github.com/Easy-Systems/' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Legal Center', href: 'https://easysystems.dev/legal' },
            { label: 'Privacy Policy', href: 'https://easysystems.dev/privacy' },
            { label: 'Payment ToS', href: 'https://easysystems.dev/billingtos' },
            { label: 'Imprint', href: 'https://easysystems.dev/imprint' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EasySystems. Made with ❤ (and React)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: '9QKD7EUUWL',
      apiKey: 'f778ab1975fd34fae19ea4debb9cc038',
      indexName: 'easysystems',
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    './plugins/blog-rss-plugin.js',
  ],
};

export default config;