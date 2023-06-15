const path = require('path');
const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: 'Danger Zone',
  tagline: 'Unreleased documentation',
  baseUrl: '/next/',
  noIndex: true,
  themeConfig: {
    announcementBar: {
      id: 'next',
      content: '.',
      isCloseable: false,
    },
    image: 'img/next-wiki.png',
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Shimmer Wiki Logo',
        src: 'img/logo_next.svg',
        srcDark: 'img/logo_next_dark.svg',
      },
      items: [
        {
          label: 'Use Shimmer',
          to: '/use/wallets/what-is-a-wallet',
          activeBaseRegex: '^(/[^/]+)?/use/.*',
        },
        {
          label: 'Learn',
          to: '/learn/welcome',
          activeBaseRegex:
            '^(/[^/]+)?/learn/.*|' +
            '^(/[^/]+)?/IOTA-2.0-Research-Specifications/.*|' +
            '^(/[^/]+)?/goshimmer/.*',
        },
        {
          label: 'Develop',
          to: '/develop/explanations/what-is-shimmer/introduction',
          activeBaseRegex: '^(/[^/]+)?/develop.*|' + '^(/[^/]+)?/tutorials*',
        },
        {
          label: 'Documentation',
          to: '/develop/docs',
          activeBaseRegex:
            '^(/[^/]+)?/develop/docs|' +
            '^(/[^/]+)?/smart-contracts/.*|' +
            '^(/[^/]+)?/iota-sdk/.*|' +
            '^(/[^/]+)?/stronghold.rs/.*|' +
            '^(/[^/]+)?/hornet/.*|' +
            '^(/[^/]+)?/bee/.*|' +
            '^(/[^/]+)?/chronicle/.*|' +
            '^(/[^/]+)?/introduction/.*|' +
            '^(/[^/]+)?/identity.rs/.*|' +
            '^(/[^/]+)?/tips*',
        },
        {
          label: 'Community',
          to: '/community/the-community/discord',
          activeBaseRegex: '^(/[^/]+)?/community/.*',
        },
        {
          type: 'custom-network-dropdown',
          position: 'right',
          label: 'Next',
          items: [
            {
              label: 'IOTA',
              routeBasePath: '/',
            },
            {
              label: 'Shimmer',
              routeBasePath: '/shimmer/',
            },
          ],
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Use',
          items: [
            {
              label: 'Wallets',
              to: '/use/wallets/what-is-a-wallet',
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'How It Works',
              to: '/learn/welcome',
            },
          ],
        },
        {
          title: 'Develop',
          items: [
            {
              label: 'Smart Contracts',
              href: '/smart-contracts/overview',
            },
            {
              label: 'Nodes',
              to: '/develop/nodes/about-nodes',
            },
            {
              label: 'Wasp',
              href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
              label: 'Tutorials',
              href: '/tutorials',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Funding',
              to: '/community/funding/edf-funding',
            },
            {
              label: 'The Community',
              to: '/community/the-community/how-to-support',
            },
            {
              label: 'Research',
              to: '/community/research/research-outline',
            },
            {
              label: 'Contribute To Wiki',
              to: '/community/contribute-to-wiki/welcome',
            },
          ],
        },
      ],
      logo: {
        alt: 'Shimmer Logo',
        src: 'img/footer_logo.svg',
        href: 'https://www.shimmer.network',
      },
      copyright: `© ${new Date().getFullYear()} IOTA Wiki. Built with Docusaurus. <a href="/cookie-policy"> Cookie Policy. </a>`,
    },
    socials: [
      {
        url: 'https://www.youtube.com/c/iotafoundation',
        backgroundColor: 'var(--ifm-color-gray-900)',
      },
      {
        url: 'https://www.github.com/iotaledger/',
        backgroundColor: '#2C3850',
      },
      {
        url: 'https://discord.shimmer.network/',
        backgroundColor: '#4B576F',
      },
      {
        url: 'https://www.twitter.com/shimmer/',
        backgroundColor: '#6A768E',
      },
      {
        url: 'https://www.reddit.com/r/iota/',
        backgroundColor: '#7D89A1',
      },
      {
        url: 'https://www.linkedin.com/company/iotafoundation/',
        backgroundColor: '#8995AD',
      },
      {
        url: 'https://www.instagram.com/iotafoundation/',
        backgroundColor: '#99A5BD',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('../src/next/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        pages: {
          path: path.resolve(__dirname, '../src/next/pages'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'use',
        path: path.resolve(__dirname, 'use'),
        routeBasePath: 'use',
        sidebarPath: require.resolve('./use/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: path.resolve(__dirname, 'learn'),
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./learn/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'develop',
        path: path.resolve(__dirname, 'develop'),
        routeBasePath: 'develop',
        sidebarPath: require.resolve('./develop/sidebars.ts'),
        docItemComponent: '@theme/ApiItem',

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'develop', // e.g. "classic" or the plugin-content-docs id
        config: {
          core_rest_api: {
            specPath:
              'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0025/core-rest-api.yaml',
            outputDir: path.resolve(__dirname, 'develop/nodes/core-rest-api'),
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-sdk',
        path: path.resolve(__dirname, 'external/iota-sdk/docs'),
        routeBasePath: 'iota-sdk',
        sidebarPath: require.resolve('./external/iota-sdk/sidebars.js'),
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        //overriding default exclude array to include the python api's classes with _ at the beginning
        //but still exclude any _admonitions
        exclude: [
          // '**/_*.{js,jsx,ts,tsx,md}',
          // '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
          '**/_admonitions/_**',
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cli-wallet',
        path: path.resolve(__dirname, 'external/cli-wallet/docs'),
        routeBasePath: 'cli-wallet',
        sidebarPath: require.resolve('./external/cli-wallet/sidebars.js'),
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hornet',
        path: path.resolve(__dirname, 'external/hornet/docs'),
        routeBasePath: 'hornet',
        sidebarPath: path.resolve(__dirname, 'external/hornet/sidebars.js'),
        editUrl: 'https://github.com/iotaledger/hornet/edit/develop/documentation',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-goshimmer',
        path: path.resolve(__dirname, 'external/goshimmer/docs'),
        routeBasePath: 'goshimmer',
        sidebarPath: path.resolve(
            __dirname,
            'external/goshimmer/sidebars.js',
        ),
        editUrl:
            'https://github.com/iotaledger/goshimmer/edit/develop/documentation',
      },
    ],


    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'introduction-docs',
        path: path.resolve(__dirname, 'external/introduction-docs/docs'),
        routeBasePath: 'introduction',
        sidebarPath: path.resolve(__dirname, 'external/introduction-docs/sidebars.js'),
        editUrl: 'https://github.com/iotaledger/chrysalis-docs/edit/develop/docs',
        remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
      }
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-IOTA-Research-Specifications',
        path: path.resolve(
            __dirname,
            'external/iota-2.0-research-specifications/',
        ),
        routeBasePath: 'IOTA-2.0-Research-Specifications',
        sidebarPath: path.resolve(
            __dirname,
            'external/iota-2.0-research-specifications/sidebars.js',
        ),
        editUrl:
            'https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        include: ['*.md'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-iota-tips',
        path: path.resolve(__dirname, 'external/tips'),
        routeBasePath: 'tips',
        editUrl: 'https://github.com/iotaledger/tips/edit/main/',
        remarkPlugins: [require('remark-import-partial')],
        include: ['tips/**/*.md', 'README.md'],
        sidebarPath: path.resolve(__dirname, 'external/tips/sidebars.js'),
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wasp',
        path: path.resolve(__dirname, 'external/wasp/docs'),
        routeBasePath: 'smart-contracts',
        sidebarPath: path.resolve(__dirname, 'external/wasp/sidebars.js'),
        editUrl: 'https://github.com/iotaledger/wasp/edit/develop/documentation',
        remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
      }
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota-chronicle-rs',
        path: path.resolve(__dirname, 'external/chronicle/docs'),
        routeBasePath: 'chronicle',
        sidebarPath: path.resolve(
            __dirname,
            'external/chronicle/sidebars.js',
        ),
        editUrl:
            'https://github.com/iotaledger/chronicle.rs/edit/main/documentation',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        versions: {
          current: {
            label: 'IOTA',
            badge: true,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'identity-rs',
        path: path.resolve(__dirname, 'external/identity.rs/0.7-alpha/docs'),
        routeBasePath: 'identity.rs',
        sidebarPath: path.resolve(__dirname, 'external/identity.rs/0.7-alpha/sidebars.js'),
        editUrl: 'https://github.com/iotaledger/identity.rs/edit/support/v0.7/documentation',
        remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
        versions: {
          current: {
            label: '0.7',
            badge: true
          },
        },
      }
    ],
  ],
  staticDirectories: [
    path.resolve(__dirname, 'external/iota-sdk/static'),
    path.resolve(__dirname, 'external/cli-wallet/static'),
    path.resolve(__dirname, 'external/hornet/static'),
    path.resolve(__dirname, './external/goshimmer/static'),
    path.resolve(__dirname, './external/introduction-docs/static'),
    path.resolve(
        __dirname,
        './external/iota-2.0-research-specifications/static',
    ),
    path.resolve(__dirname, './external/tips/static'),
    path.resolve(__dirname, './external/wasp/static'),
    path.resolve(__dirname, './external/chronicle/static'),
    path.resolve(__dirname, './external/identity.rs/0.7-alpha/static'),

  ],
};
