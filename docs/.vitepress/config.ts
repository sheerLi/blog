export default {
  base: "/blog/",
  lang: "zh",
  title: "Web前端知识体系",
  titleTemplate: "前端知识体系和计算机基础知识整理与分享",
  description: "前端知识体系和计算机基础知识整理与分享",
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "计算机基础",
        items: [
          { text: "操作系统", link: "/cs/os" },
          { text: "计算机网络", link: "/cs/network" },
          { text: "数据结构", link: "/cs/data-structure" },
        ],
      },
      {
        text: "前端基础",
        items: [{ text: "JavaScript", link: "/fe/js/" }],
      },
      {
        text: "前端框架",
        items: [
          { text: "Vue", link: "/framework/vue" },
          { text: "React", link: "/framework/react" },
          { text: "Angular", link: "/framework/angular" },
        ],
      },
      {
        text: "前端工程化",
        items: [{ text: "Vite", link: "/engineer/vite/" }],
      },
      {
        text: "Docker",
        link: "/docker",
      },
      {
        text: "k8s",
        link: "/k8s",
      },
    ],
    sidebar: {
      "/engineer/vite/": [
        {
          text: "Vite",
          items: [
            { text: "概念", link: "/engineer/vite/" },
            { text: "依赖预构建", link: "/engineer/vite/dep-pre-bundling" }, // /guide/index.md
            { text: "vite与ts的结合", link: "/engineer/vite/ts" }, // /guide/one.md
          ],
        },
      ],
      "/fe/js/": [
        {
          text: "前言",
          items: [{ text: "变量类型和计算", link: "/fe/js/variable" }],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/sheerLi" }],
    footer: {
      message: "MIT Licensed",
      copyright: "Copyright © 2022-present sheerLi",
    },
  },
};
