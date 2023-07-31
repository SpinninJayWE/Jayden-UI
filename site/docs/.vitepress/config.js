export default {
  title: 'jayden-ui',
  base: process.env.NODE_ENV === 'production' ? '/jayden-ui/' : '/',
  themeConfig: {
    siteTitle: 'jayden-ui',
    nav: [
      { text: '指南', link: '/guild/install' },
      { text: '组件', link: '/components/button/index' }
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
          text: '组件',
          items: [
            {
              text: 'Icon',
              link: '/components/icon/index.md'
            },
            {
              text: 'Button',
              link: '/components/button/index.md'
            },
            {
              text: 'Modal',
              link: '/components/Modal/index.md'
            },
            {
              text: 'Input',
              link: '/components/input/index.md'
            },
            {
              text: 'Popover',
              link: '/components/popover/index.md'
            },
            {
              text: 'Select',
              link: '/components/select/index.md'
            },
            {
              text: 'Alert',
              link: '/components/alert/index.md'
            },
            {
              text: 'Message',
              link: '/components/message/index.md'
            },
            {
              text: 'Carousel',
              link: '/components/carousel/index.md'
            }
          ]
        }
      ]
    }
  }
};
