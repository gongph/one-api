module.exports = {
  base: '/one-api/',
  title: '「ONE · 一个」API文档',
  description: '「ONE · 一个」API文档仅供学习之用，禁止商业使用！',
  head: [
    ['link', { rel: 'icon', href: '/one.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Issues', link: 'https://github.com/gongph/one-api/issues' },
      { text: 'Juejin', link: 'https://juejin.im/user/57beefb6efa631005a9edd7c' },
      { text: 'Github', link: 'https://github.com/gongph/one-api' },
    ],
    sidebar: {
      '/home/': [''],
      '/': ['']
    }
  },
  serviceWorker: true
}