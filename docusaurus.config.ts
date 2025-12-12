import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Girivardhan Velpula - Software Development Engineer',
  tagline: 'Backend Systems, AI Integration & Test Management Software',
  favicon: 'img/favicon.ico',
  
  // Additional favicon configurations
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img/favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/img/site.webmanifest',
      },
    },
  ],

  // Set the production url of your site here
  url: 'https://vgirivardhan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VGirivardhan', // Usually your GitHub org/user name.
  projectName: 'VGirivardhan.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
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
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VGirivardhan/VGirivardhan.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Girivardhan Velpula',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/experience', label: 'Experience', position: 'left'},
        {to: '/certifications', label: 'Certifications', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/VGirivardhan',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/girivardhan-velpula',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://leetcode.com/u/vgirivardhan139',
          label: 'LeetCode',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Projects',
              to: '/projects',
            },
            {
              label: 'Experience',
              to: '/experience',
            },
            {
              label: 'Certifications',
              to: '/certifications',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/VGirivardhan',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/girivardhan-velpula',
            },
            {
              label: 'LeetCode',
              href: 'https://leetcode.com/u/vgirivardhan139',
            },
            {
              label: 'GeeksforGeeks',
              href: 'https://www.geeksforgeeks.org/profile/girivardhan_velpula',
            },
            {
              label: 'HackerRank',
              href: 'https://www.hackerrank.com/profile/vgirivardhan139',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Girivardhan Velpula.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
