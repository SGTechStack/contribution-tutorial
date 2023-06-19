import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b97'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '64b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2d5'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '727'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '50a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'd95'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fdd'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2b1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '0e5'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '5b1'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1a3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3fe'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd3c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'dd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/spring-boot-starter---basics',
        component: ComponentCreator('/category/spring-boot-starter---basics', '245'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/spring-boot-starter-basics/congratulations',
        component: ComponentCreator('/spring-boot-starter-basics/congratulations', 'f55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/spring-boot-starter-basics/create-a-spring-boot-starter-library',
        component: ComponentCreator('/spring-boot-starter-basics/create-a-spring-boot-starter-library', '85d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
