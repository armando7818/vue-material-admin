import lazyLoading from './lazyLoading';

export default {
  path: '/graphs',
  meta: {
    name: () => 'Graph',
    icon: 'pie_chart',
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
      path: 'bar',
      meta: {
        name: () => 'Bar',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
    {
      path: 'pie',
      meta: {
        name: () => 'Pie',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
  ],
};