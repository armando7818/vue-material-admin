import lazyLoading from './lazyLoading';

export default {
  path: '/forms',
  meta: {
    name: () => 'Forms',
    icon: 'edit',
    expanded: false,
  },
  component: {
    template: '<router-view/>',
  },
  children: [
    {
      path: '',
      component: lazyLoading('dashboard', true),
    },
    {
      path: 'steppers',
      meta: {
        name: () => 'Steppers',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
    {
      path: 'layout',
      meta: {
        name: () => 'Layout',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
  ],
};
