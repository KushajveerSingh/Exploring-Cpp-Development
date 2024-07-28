import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const remarkPlugins: any[] = [remarkMath];
const rehypePlugins: any[] = [rehypeKatex];

const docs_obj = {
  editUrl:
    'https://github.com/KushajveerSingh/Exploring-Cpp-Development/edit/main/',
  sidebarCollapsed: false,
  remarkPlugins: remarkPlugins,
  rehypePlugins: rehypePlugins,
  showLastUpdateTime: true,
};

const title = 'Exploring Cpp Development';
const meta_description =
  'Full-stack software engineer. Love hiking & orienteering, painting in various mediums, and occasionally crafting origami.';

const config: Config = {
  title: title,
  url: 'https://kushajveersingh.com/',
  baseUrl: '/Exploring-Cpp-Development/',

  favicon: 'favicon.ico',

  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US'],
  },

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  tagline: meta_description,

  organizationName: 'KushajveerSingh',
  projectName: 'Exploring-Cpp-Development',
  deploymentBranch: 'gh-pages',

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    image: 'favicon.ico',

    metadata: [
      {
        name: 'description',
        content: meta_description,
      },
    ],

    navbar: {
      title: title,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'dropdown',
          label: 'Socials',
          position: 'right',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KushajveerSingh/Exploring-Cpp-Development',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/kushajveersingh/',
            },
          ],
        },
      ],
      hideOnScroll: true,
    },

    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },

    prism: {
      theme: prismThemes.palenight,
      darkTheme: prismThemes.palenight,
      additionalLanguages: [],
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Kushajveer Singh Sooch. All rights reserved.`,
      style: 'dark',
    },
  } satisfies Preset.ThemeConfig,

  presets: [
    [
      'classic',
      {
        docs: {
          ...docs_obj,
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: null,
          priority: null,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [],

  markdown: {
    format: 'mdx',
    mermaid: true,
  },

  headTags: [],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  scripts: [],
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
