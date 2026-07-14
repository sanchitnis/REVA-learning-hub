// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'REVA LEARNING HUB',
  tagline: 'Learn & Build - Collaborate & Innovate with AI',
  favicon: 'img/favicon.ico',

  url: 'https://sanchitnis.github.io',
  baseUrl: '/REVA-learning-hub/',
  organizationName: 'sanchitnis',
  projectName: 'REVA-learning-hub',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
        blog: {}, // Enable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
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
        title: '',
        logo: {
          alt: 'REVA University Logo',
          src: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/REVA_University_Bangalore.png',
        },
        items: [
          {
            to: '/intro#explore-our-courses',
            position: 'left',
            label: 'Contents',
          },
          {
            to: '/intro',
            position: 'left',
            label: 'Introduction',
            activeBasePath: 'never-active', // Prevents double highlighting of root pages
          },
          {
            to: '/intro#interactive-presentations',
            position: 'left',
            label: 'Microlearning',
          },
          {
            to: '/pdf500-faculty-guides/pdf501-content-creation',
            position: 'left',
            label: 'Create Content',
          },
          {
            to: '/blog',
            position: 'left',
            label: 'Blogs',
          },
          {
            to: '/Common-Resources',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://reva.edu.in',
            label: 'REVA University',
            position: 'right',
          },
          {
            href: 'https://aihub.reva.edu.in',
            position: 'right',
            label: 'AI Hub',
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
                label: 'REVA RACE',
                href: 'https://race.reva.edu.in/',
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
