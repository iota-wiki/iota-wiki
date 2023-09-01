const { glob, merge } = require('./src/utils/config');
const path = require('path');
const { create_doc_plugin, globStatic } = require('./src/utils/config');
const common = require('./common/docusaurus.config');
const contentConfigs = require('./contentPlugins');
const articleRedirectsFile = require('./articleRedirects');

module.exports = async () => {
  const contentPlugins = await Promise.all(
    (
      await contentConfigs()
    ).map(async (contentConfig) => await create_doc_plugin(contentConfig)),
  );

  // Get tips and tutorials
  const additionalPlugins = await glob(['docs/external/tips', 'tutorials']);

  const { MODE = 'development' } = process.env;

  if (!['development', 'production'].includes(MODE)) {
    throw "Set MODE to 'development', or 'production'";
  }

  const isProduction = MODE === 'production';

  const themeConfig = {
    themeConfig: {
      image: 'img/iota-wiki.png',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'IOTA Wiki Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            label: 'Get Started',
            to: '/get-started/introduction/iota/introduction/',
            activeBaseRegex: '^(/[^/]+)?/get-started/.*',
          },
          {
            label: 'Learn',
            to: '/learn/protocols/introduction',
            activeBaseRegex: '^(/[^/]+)?/learn/.*',
          },
          {
            label: 'Build',
            to: '/build/welcome/',
            activeBaseRegex:
              '^(/[^/]+)?/build/.*|' +
              '^(/[^/]+)?/iota-sdk/.*|' +
              '^(/[^/]+)?/identity.rs/.*|' +
              '^(/[^/]+)?/iota.rs/.*|' +
              '^(/[^/]+)?/iota.js/.*|' +
              '^(/[^/]+)?/wallet.rs/.*|' +
              '^(/[^/]+)?/stronghold.rs/.*|' +
              '^(/[^/]+)?/streams/.*|' +
              '^(/[^/]+)?/smart-contracts/.*',
          },
          {
            label: 'Maintain',
            to: '/maintain/welcome',
            activeBaseRegex:
              '^(/[^/]+)?/maintain/.*|' +
              '^(/[^/]+)?/hornet/.*|' +
              '^(/[^/]+)?/wasp/.*|' +
              '^(/[^/]+)?/chronicle/.*|' +
              '^(/[^/]+)?/goshimmer/.*',
          },
        ],
      },
      footer: {},
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
          url: 'https://discord.iota.org/',
          backgroundColor: '#4B576F',
        },
        {
          url: 'https://www.twitter.com/iota/',
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
      algolia: {
        appId: 'YTLE56KAO4',
        apiKey: '75358d60d302f7f93f630d63128abb03',
        indexName: 'iota',
        contextualSearch: true,
      },
    },
  };

  const production = {
    themeConfig: {
      matomo: {
        matomoUrl: 'https://matomo.iota-community.org/',
        siteId: '13',
      },
    },
    plugins: [
      // Temporarily disabled because of Cookiebot blocking required scripts.
      // path.resolve(__dirname, 'plugins', 'cookiebot'),
      path.resolve(__dirname, 'plugins', 'matomo'),
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-KVB88SVNF8',
          anonymizeIP: true,
        },
      ],
    ],
  };

  const staticDirs = await globStatic('/docs/**/static/', __dirname);

  return merge(
    common,
    {
      title: 'IOTA Wiki',
      tagline: 'The complete reference for IOTA and Shimmer',
      baseUrl: '/',
      presets: [
        [
          '@docusaurus/preset-classic',
          {
            docs: false,
            blog: false,
            theme: {
              customCss: require.resolve('./src/css/custom.css'),
            },
            sitemap: {
              changefreq: 'daily',
              priority: 0.5,
            },
            pages: {
              path: path.resolve(__dirname, './src/pages'),
            },
          },
        ],
      ],
      plugins: [
        ...contentPlugins,
        [
          'docusaurus-plugin-openapi-docs',
          {
            id: 'openapi',
            docsPluginId: 'apis', // e.g. "classic" or the plugin-content-docs id
            config: {
              coreApiChrysalis: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0013/rest-api.yaml',
                outputDir: path.resolve(__dirname, 'docs/build/apis/core/v1'),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              coreApiShimmer: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0025/core-rest-api.yaml',
                outputDir: path.resolve(__dirname, 'docs/build/apis/core/v2'),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              waspApi: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/wasp/develop/clients/apiclient/api/openapi.yaml',
                outputDir: path.resolve(__dirname, 'docs/build/apis/wasp'),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              indexerApi: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0026/indexer-rest-api.yaml',
                outputDir: path.resolve(__dirname, 'docs/build/apis/indexer'),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              poiApi: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/inx-poi/develop/rest-api.yaml',
                outputDir: path.resolve(__dirname, 'docs/build/apis/poi'),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              explorerApi: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/inx-chronicle/main/documentation/api/api-explorer.yml',
                outputDir: path.resolve(__dirname, 'docs/build/apis/explorer'),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
              ircMetadata: {
                specPath:
                  'https://raw.githubusercontent.com/iotaledger/inx-irc-metadata/develop/rest-api.yaml',
                outputDir: path.resolve(
                  __dirname,
                  'docs/build/apis/irc-metadata',
                ),
                sidebarOptions: {
                  groupPathsBy: 'tag',
                },
              },
            },
          },
        ],
        [
          '@docusaurus/plugin-client-redirects',
          {
            redirects: articleRedirectsFile.articleRedirects,
            // directory redirects - only added for directories that didn't have a direct match
            createRedirects(existingPath) {
              const redirects = [
                {
                  from: '/develop/nodes/rest-api',
                  to: '/apis/core/v1',
                },
                {
                  from: '/shimmer/chronicle',
                  to: '/chronicle/1.0.0-rc.1',
                },
                {
                  from: '/shimmer/cli-wallet',
                  to: '/cli-wallet',
                },
                {
                  from: '/shimmer/community',
                  to: '/community',
                },
                {
                  from: '/shimmer/develop/nodes/core-rest-api',
                  to: '/apis/core/v2',
                },
                {
                  from: '/shimmer/goshimmer',
                  to: '/goshimmer',
                },
                {
                  from: '/shimmer/hornet',
                  to: '/hornet/2.0.0-rc.6',
                },
                {
                  from: '/shimmer/identity.rs',
                  to: '/identity.rs/0.7',
                },
                {
                  from: '/shimmer/introduction',
                  to: '/introduction/stardust',
                },
                {
                  from: '/shimmer/iota-sdk',
                  to: '/iota-sdk',
                },
                {
                  from: '/shimmer/iota.js',
                  to: '/iota.js',
                },
                {
                  from: '/shimmer/iota.rs',
                  to: '/iota.rs/2.0.1-rc.7',
                },
                {
                  from: '/shimmer/smart-contracts/guide/chains_and_nodes',
                  to: '/smart-contracts/guide/chains_and_nodes',
                },
                {
                  from: '/shimmer/smart-contracts/guide/core_concepts',
                  to: '/learn/smart-contracts/core_concepts',
                },
                {
                  from: '/shimmer/smart-contracts/guide/evm/compatibility',
                  to: '/smart-contracts/guide/evm/compatibility',
                },
                {
                  from: '/shimmer/smart-contracts/guide/evm',
                  to: '/smart-contracts/guide/evm',
                },
                {
                  from: '/shimmer/smart-contracts/guide/solo',
                  to: '/smart-contracts/guide/solo',
                },
                {
                  from: '/shimmer/smart-contracts/guide/wasm_vm',
                  to: '/smart-contracts/guide/wasm_vm',
                },
                {
                  from: '/shimmer/stronghold.rs',
                  to: '/stronghold.rs',
                },
                {
                  from: '/shimmer/team',
                  to: '/team',
                },
                {
                  from: '/shimmer/tutorials',
                  to: '/tutorials',
                },
                {
                  from: '/shimmer/wallet.rs',
                  to: '/wallet.rs/1.0.0-rc.6',
                },
                {
                  from: '/shimmer/learn/governance/',
                  to: '/learn/governance/',
                },
              ];

              for (const redirect of redirects) {
                if (existingPath.includes(redirect.to)) {
                  return existingPath.replace(redirect.to, redirect.from);
                }
              }
            },
          },
        ],
      ],
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
      staticDirectories: [...staticDirs],
    },
    themeConfig,
    isProduction ? production : {},
    ...additionalPlugins,
  );
};
