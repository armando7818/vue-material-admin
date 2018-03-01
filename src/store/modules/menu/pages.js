import lazyLoading from './lazyLoading';

export default {
  name: 'Pages',
  path: '/pages',
  meta: {
    icon: 'content_copy',
    expanded: false,
  },
  component: lazyLoading('dashboard', true),
  children: [{
    name: 'About',
    path: 'about',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }],
};
