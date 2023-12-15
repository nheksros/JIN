import type { DefaultTheme } from 'vitepress'
 
export const nav: DefaultTheme.Config['nav'] = [
    // { text: '导航', link: '/articles/导航/navigate' },
    // { text: '博客', link: '/articles/博客/关于博客建立过程' },
    {
        text: 'Blog',
        items: [
            { text: "myArticle", link: "/articles/chinese/index" },

            // { text: "JavaScript", link: "/articles/JavaScript/0认识JavaScript" },
            // { text: "typescript", link: "/articles/typescript/01-基础类型" },
            // { text: "Vue", link: "/articles/Vue/01-Vue3基础语法" },
        ],
    },
    // { text: '工具', link: '/articles/工具/nvm' },
    // { text: '动画', link: '/cartoonsMD/O.o欢迎' },
]