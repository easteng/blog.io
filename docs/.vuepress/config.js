module.exports = {
    title: '东腾的博客',
    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }]
    ],
    markdown: {
      // 显示代码行号
      lineNumbers: false
    },
    themeConfig: {
        logo:"/img/logo.png",
        nav: [
          { text: '首页', link: '/home/' },
          { text: '技术', link:'/timeLine/'},
          { text: '生活',link: '/life/' },
          { text: '思考',link: '/ponder/'},
          { text: '标签库', link: '/tags/' },
          { text: '关于', link:'/about/'},
          { text: '留言板', link:'/massage/'},
          { text: '链接',
            items: [
                {text:'简书',link: 'https://www.jianshu.com/u/cbc58f855e75' },
                {text:'GitHub',link: 'https://github.com/zhuzhaohua' },
                {text:'码云',link: 'https://gitee.com/kobuta' },
            ]
          }
        ],
        lastUpdated: 'Last Updated', 
      }
  }