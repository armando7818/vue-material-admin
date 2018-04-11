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
      name: 'Forms',
      path: '',
      component: lazyLoading('dashboard', true),
    },
    {
      name: 'Steppers',
      path: 'steppers',
      meta: {
        name: () => 'Steppers',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
    {
      name: 'Layout',
      path: 'layout',
      meta: {
        name: () => 'Layout',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
  ],
};
