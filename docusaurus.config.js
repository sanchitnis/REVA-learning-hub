// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'REVA Learning Hub',
  tagline: 'Educate to Enterprise',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://learning.reva.edu.in',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve docs at the root
        },
        blog: false, // Disable blog for a pure learning hub
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'REVA Learning Hub',
        logo: {
          alt: 'REVA University Logo',
          src: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/REVA_University_Bangalore.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Courses',
          },
          {
            href: 'https://reva.edu.in',
            label: 'REVA University',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'REVA Website',
                href: 'https://reva.edu.in',
              },
              {
                label: 'REVA NEST',
                href: 'https://revanest.com',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/revauniversity/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/school/reva-university/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} REVA University. #REVAuniversity #EducateToEnterprise`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


export default config;
