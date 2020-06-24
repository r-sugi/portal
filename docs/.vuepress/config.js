module.exports = {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' }],
  ],
  themeConfig: {
    sidebar: 'auto',
    search: false,
    smoothScroll: true,
    nav: [
      { text: 'EntryPoint', link: '/' },
      { text: 'CV', link: '/cv/' },
      { text: 'Github', link: 'https://github.com/r-sugi', target:'_blank' }
    ]
  },
}
