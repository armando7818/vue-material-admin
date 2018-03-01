import lazyLoading from './lazyLoading';

export default {
  name: 'Forms',
  path: '/forms',
  meta: {
    icon: 'edit',
    expanded: false,
  },
  component: lazyLoading('dashboard', true),
  children: [{
    name: 'Form Elements',
    path: 'form-elements',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }, {
    name: 'Steppers',
    path: 'steppers',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }, {
    name: 'Layout',
    path: 'layout',
    meta: {
      link: 'dashboard/index.vue',
    },
    component: lazyLoading('dashboard', true),
  }],
};
