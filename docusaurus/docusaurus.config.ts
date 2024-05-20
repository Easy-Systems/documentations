import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EasyThreads Docs',
  tagline: 'Use Threads & forums at a higher level',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.easythreads.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'easysystems', // Usually your GitHub org/user name.
  projectName: 'easythreads-documentation', // Usually your repo name.

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
      title: 'EasyThreads',
      logo: {
        alt: 'EasyThreads Logo',
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
              label: 'Autothreading',
              to: '/docs/autothreading',
            },
            {
              label: 'Automations',
              to: '/docs/automations',
            },
            {
              label: 'Forum',
              to: '/docs/forum',
            },
            {
              label: 'Panels',
              to: '/docs/panels',
            }
          ],
        },
        {
          title: 'Helpful Ressources',
          items: [
            {
              label: 'Dashboard',
              href: 'https://easythreads.xyz/dashboard',
            },
            {
              label: 'app Invite',
              href: 'https://easythreads.xyz/invite',
            },
            {
              label: 'Support Server',
              href: 'https://easysystems.live/',
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
              label: 'X / Twitter',
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
              label: 'Privacy Policy',
              to: '/legal/privacy-policy',
            },
            {
              label: 'Terms of Service',
              to: '/legal/terms-of-service',
            },
            {
              label: 'Cookie Policy',
              to: '/legal/cookie-policy',
            },
            {
              label: 'Imprint',
              to: '/legal/imprint',
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
  } satisfies Preset.ThemeConfig,
};

export default config;
