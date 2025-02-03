import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blogcelldocs/',
  title: "BlogCell.Docs.",
  description: "Docs.",
  outDir: './dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'VBA Documentation', link: '/vba-documentation' }
    ],

    sidebar: [
      {
        text: 'Go To',
        items: [
          { text: 'VBA Documentation', link: '/vba-documentation' },
          { text: 'Blogs', link: '/blogging' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
