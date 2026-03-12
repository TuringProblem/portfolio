import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/portfolio/__docusaurus/debug',
    component: ComponentCreator('/portfolio/__docusaurus/debug', '040'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/portfolio/__docusaurus/debug/config', '9ca'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/portfolio/__docusaurus/debug/content', 'da5'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/portfolio/__docusaurus/debug/globalData', '46a'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/portfolio/__docusaurus/debug/metadata', '138'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/portfolio/__docusaurus/debug/registry', '3df'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/portfolio/__docusaurus/debug/routes', 'dd6'),
    exact: true
  },
  {
    path: '/portfolio/about',
    component: ComponentCreator('/portfolio/about', '4af'),
    exact: true
  },
  {
    path: '/portfolio/about/',
    component: ComponentCreator('/portfolio/about/', '92e'),
    exact: true
  },
  {
    path: '/portfolio/about/contact/',
    component: ComponentCreator('/portfolio/about/contact/', 'f83'),
    exact: true
  },
  {
    path: '/portfolio/about/education/',
    component: ComponentCreator('/portfolio/about/education/', '098'),
    exact: true
  },
  {
    path: '/portfolio/about/github/',
    component: ComponentCreator('/portfolio/about/github/', '1dc'),
    exact: true
  },
  {
    path: '/portfolio/about/profile/',
    component: ComponentCreator('/portfolio/about/profile/', 'd10'),
    exact: true
  },
  {
    path: '/portfolio/about/resume/',
    component: ComponentCreator('/portfolio/about/resume/', 'd6b'),
    exact: true
  },
  {
    path: '/portfolio/blog',
    component: ComponentCreator('/portfolio/blog', 'c7c'),
    exact: true
  },
  {
    path: '/portfolio/blog/archive',
    component: ComponentCreator('/portfolio/blog/archive', '5f2'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors',
    component: ComponentCreator('/portfolio/blog/authors', '569'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors/andrew',
    component: ComponentCreator('/portfolio/blog/authors/andrew', 'ca9'),
    exact: true
  },
  {
    path: '/portfolio/blog/Game',
    component: ComponentCreator('/portfolio/blog/Game', '32e'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags',
    component: ComponentCreator('/portfolio/blog/tags', '921'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/about',
    component: ComponentCreator('/portfolio/blog/tags/about', 'fb1'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/introduction',
    component: ComponentCreator('/portfolio/blog/tags/introduction', 'a02'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/portfolio',
    component: ComponentCreator('/portfolio/blog/tags/portfolio', 'b73'),
    exact: true
  },
  {
    path: '/portfolio/blog/Thoughts on Docusaurus',
    component: ComponentCreator('/portfolio/blog/Thoughts on Docusaurus', '104'),
    exact: true
  },
  {
    path: '/portfolio/blog/welcome',
    component: ComponentCreator('/portfolio/blog/welcome', '50d'),
    exact: true
  },
  {
    path: '/portfolio/components/',
    component: ComponentCreator('/portfolio/components/', 'a8d'),
    exact: true
  },
  {
    path: '/portfolio/components/philosophy/',
    component: ComponentCreator('/portfolio/components/philosophy/', '340'),
    exact: true
  },
  {
    path: '/portfolio/components/philosophy/data',
    component: ComponentCreator('/portfolio/components/philosophy/data', '791'),
    exact: true
  },
  {
    path: '/portfolio/components/philosophy/philosophy-list',
    component: ComponentCreator('/portfolio/components/philosophy/philosophy-list', '98f'),
    exact: true
  },
  {
    path: '/portfolio/components/philosophy/philosophy.interface',
    component: ComponentCreator('/portfolio/components/philosophy/philosophy.interface', 'b52'),
    exact: true
  },
  {
    path: '/portfolio/data',
    component: ComponentCreator('/portfolio/data', 'd95'),
    exact: true
  },
  {
    path: '/portfolio/markdown-page',
    component: ComponentCreator('/portfolio/markdown-page', '64b'),
    exact: true
  },
  {
    path: '/portfolio/projects',
    component: ComponentCreator('/portfolio/projects', 'e73'),
    exact: true
  },
  {
    path: '/portfolio/docs',
    component: ComponentCreator('/portfolio/docs', '4d7'),
    routes: [
      {
        path: '/portfolio/docs',
        component: ComponentCreator('/portfolio/docs', '536'),
        routes: [
          {
            path: '/portfolio/docs',
            component: ComponentCreator('/portfolio/docs', '6f3'),
            routes: [
              {
                path: '/portfolio/docs/projects/Atoms',
                component: ComponentCreator('/portfolio/docs/projects/Atoms', '589'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/Deej',
                component: ComponentCreator('/portfolio/docs/projects/Deej', '2a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/INSTALL',
                component: ComponentCreator('/portfolio/docs/projects/INSTALL', 'be4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/intro',
                component: ComponentCreator('/portfolio/docs/projects/intro', '077'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/Shifty',
                component: ComponentCreator('/portfolio/docs/projects/Shifty', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/portfolio/',
    component: ComponentCreator('/portfolio/', '467'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
