import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ReSearch of AI',
  tagline: 'A Textbook by Panaversity',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // GitHub Pages config
  url: 'https://mhassan35.github.io',
  baseUrl: '/aibook/',

  organizationName: 'mhassan35',
  projectName: 'ai-book',

  onBrokenLinks: 'throw',

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
          editUrl: 'https://github.com/mhassan35/ai-book/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ReSearch of AI',
      items: [
        {
          href: 'https://github.com/mhassan35/ai-book',
          label: 'GitHub',
          position: 'right',
          className: 'hide-on-mobile', // optional CSS to hide on mobile if needed
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Panaverse',
              href: 'https://www.panaverse.co',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mhassan35/ai-book',
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
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Panaverse.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
