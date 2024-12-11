module.exports = {
  title: 'X-UI',
  description: 'cjp UI',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此⽹站',
    repo: 'https://github.com/login',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present cjp',
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/getting-started' },
          ],
        },
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [{ text: 'Icon 图标', link: '/component/icon' }],
        },
      ],
    },
  },
}
