import lazyLoading from './lazyLoading';

export default {
  path: '/graphs',
  meta: {
    name: () => 'Graphs',
    icon: 'pie_chart',
    expanded: false,
  },
  component: {
    template: '<router-view/>',
  },
  children: [
    {
      name: 'Graphs',
      path: '',
      redirect: '/',
      component: lazyLoading('dashboard', true),
    },
    {
      name: 'Bar',
      path: 'bar',
      meta: {
        name: () => 'Bar',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
    {
      name: 'Pie',
      path: 'pie',
      meta: {
        name: () => 'Pie',
        link: 'dashboard/index.vue',
      },
      component: lazyLoading('dashboard', true),
    },
  ],
};