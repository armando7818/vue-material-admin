import lazyLoading from './lazyLoading';

export default {
  name: 'Graphs',
  path: '/graphs',
  meta: {
    icon: 'pie_chart',
    expanded: false,
  },
  component: lazyLoading('dashboard', true),
  children: [{
    name: 'Bar',
    path: 'bar',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }, {
    name: 'Pie',
    path: 'pie',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }],
};
