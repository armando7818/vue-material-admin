import lazyLoading from './lazyLoading';

export default {
  name: 'Tables',
  path: '/tables',
  meta: {
    icon: 'list',
    expanded: false,
  },
  component: lazyLoading('dashboard', true),
  children: [{
    name: 'Static Tables',
    path: 'static-tables',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }, {
    name: 'Responsive Tables',
    path: 'responsive-tables',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }, {
    name: 'Data Tables',
    path: 'data-tables',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }],
};
