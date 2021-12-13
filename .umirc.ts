import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/index' },
    {
      title: '首页',
      path: '/index',
      component: '@/pages/index',
      routes: [
        {title: '类组件', path: 'class', component: '@/pages/todolist/list_class.tsx' },
        {title: '函数组件', path: 'func', component: '@/pages/todolist/list_func.tsx' },
      ],
    },
  ],
  fastRefresh: {},
});
