import lazyLoading from './lazyLoading';

export default {
  meta: {
    name: () => 'Forms',
    icon: 'edit',
    expanded: false,
  },
  children: [
    {
      name: 'Steppers',
      path: '/steppers',
      meta: {
        name: () => 'Steppers',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
    {
      name: 'Layout',
      path: '/layout',
      meta: {
        name: () => 'Layout',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
  ],
};
