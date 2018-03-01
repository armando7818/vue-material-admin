import lazyLoading from './lazyLoading';
// http://d335etuyc199v1.cloudfront.net/
export default {
  name: 'UI Kit',
  path: '/ui-kit',
  meta: {
    icon: 'folder',
    expanded: false,
  },
  component: lazyLoading('dashboard', true),
  children: [{
    name: 'Buttons',
    path: 'buttons',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }],
};
