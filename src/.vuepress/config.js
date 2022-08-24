const { description } = require('../../package')

module.exports = {
  title: 'Universidad Católica del Norte',
  description: 'Reglamento interno',
  dest : 'docs',
  base : '/Proyecto6/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    sidebar: [
      '/',
      '/capitulo1/',
      '/capitulo2/',
      '/capitulo3/',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
