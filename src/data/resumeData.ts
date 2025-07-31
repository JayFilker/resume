// src/data.ts
export const resumeData = {
    basics: {
        name: '林智杰',
        jobIntention: '前端工程师',
        email: 'deerkesi3815@gmail.com',
        phone: '18050939892',
        github: 'https://github.com/JayFilker',
        address:'福建南安'
    },
    skills: ['熟练使用Vite构建工具，实现高效的前端开发。', '熟悉React Hooks生态系统，能够熟练应用Hooks(useState, useEffect, useRef等)构建高性能UI。', '熟练使用ESLint, TypeScrip编译器开发类型安全的前端应用，提升代码质量和可维护性。', '熟练使用React Router进行路由管理。', '能够进行TanStack Query (React Query)的集成，实现高效数据获取和缓存策略。', '对Node.js有一定了解，能够构建和维护简单的后端服务和API接口。','熟练使用Jotai实现原子化状态管理，优化组件间数据流。','熟悉GitHub的上传和克隆。','熟练使用vercel与railway进行挂载。'],
    experience: [
        {
            gitHubAddress: 'https://github.com/JayFilker/learning',
            mountAddress: 'https://my-blog-inky-sigma.vercel.app/',
            title: 'AstroPaper个人博客',
            duration: '2025-04至2025-05',
            mainTechnologyStack: 'React 19, TypeScript, Vite, Jotai, Lucide-React',
            introduce: '基于Astro框架的个人博客，采用现代JAMstack架构，利用静态生成(SSG)技术实现极速加载体验，集成Pagefind实现全站内容搜索功能，支持离线搜索与关键词高亮，使用TailwindCSS 4构建响应式UI系统，结合@tailwindcss/typography提供精美的文章排版，支持读者评论。'
        }, {
            gitHubAddress: 'https://github.com/JayFilker/music-player',
            mountAddress: 'https://musicplayernodejs-production.up.railway.app/login',
            title: 'Music-Player音乐播放器',
            duration: '2025-05至2025-07',
            mainTechnologyStack: 'React 19, TypeScript, Vite, Jotai, TanStack Query, Spotify API',
            introduce: '基于React+Vite+Typescript的音乐播放器应用，集成Spotify Web API实现音乐搜索、播放、介绍等等功能；集成Happi API实现歌词展示功能；自主设计并实现基于MongoDB Atlas的收藏系统后端，支持音乐收藏、分类和管理；通过七牛云对象存储服务集成视频播放功能，实现高效的音乐视频流媒体体验；使用Jotai实现轻量级状态管理，使用TanStack Query实现高效的API数据获取、缓存和状态同步；实现国际化支持，使用i18next框架提供多语言界面。'
        }
    ],
    projects: [
        {
            name: '企业数据可视化平台',
            tech: 'React, TypeScript, ECharts, Vite',
            description: '实现复杂数据的图表展示，支持10+种自定义图表，日活用户3000+'
        }
        // 更多项目...
    ],
    education: {
        institution: '福州理工学院',
        degree: '本科',
        major: '软件工程'
    }
}
