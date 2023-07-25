export default {
  title: 'jayden-ui',
  base: process.env.NODE_ENV === 'production' ? '/jayden-ui/' : '/',
  themeConfig: {
    siteTitle: 'jayden-ui',
    nav: [
      { text: '指南', link: '/guild/install' },
      { text: '组件', link: '/components/' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/SpinninJayWE/Jayden-UI'
      }
    ],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/install'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Icon',
              link: '/components/icon/index'
            },
            {
              text: 'Button',
              link: '/components/button/index'
            },
            {
              text: 'Modal',
              link: '/components/Modal/index'
            }
          ]
        }
      ]
    }
  }
};
