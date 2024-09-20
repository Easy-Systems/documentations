import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EasySystems Documentation',
  tagline: 'Discord Apps made with love.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.easysystems.live',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /* editUrl:
            'https://github.com/Easy-Systems/documentations/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /* editUrl:
            'https://github.com/Easy-Systems/documentations/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.ico',
    navbar: {
      title: 'EasySystems',
      logo: {
        alt: 'EasySystems Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/docs/opensource',
          label: 'Contribute',
          position: 'left',
        },
        {
          href: 'https://discord.gg/3saMREh8KN',
          label: 'Support Server',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'EasyThreads Documentation',
              to: '/docs/easythreads/intro',
            },
            {
              label: 'Become a Contributor',
              to: '/docs/opensource',
            }
          ],
        },
        {
          title: 'Helpful Ressources',
          items: [
            {
              label: 'Dashboard',
              href: 'https://easythreads.easysystems.live/dashboard',
            },
            {
              label: 'App Invite',
              href: 'https://ezsys.link/threads',
            },
            {
              label: 'Support Server',
              href: 'https://ezsys.link/support',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: '𝕏 / Twitter',
              href: 'https://twitter.com/EasySystemsDev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Easy-Systems/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Legal Center',
              href: 'https://easysystems.live/legal',
            },
            {
              label: 'Privacy Policy',
              href: 'https://easysystems.live/privacy',
            },
            {
              label: 'Payment ToS',
              href: 'https://easysystems.live/billingtos',
            },
            {
              label: 'Imprint',
              href: 'https://easysystems.live/imprint',
            },
          ],
        }
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
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
