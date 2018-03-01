import lazyLoading from './lazyLoading';
// http://d335etuyc199v1.cloudfront.net/
export default {
  name: 'Axios',
  path: '/axios',
  meta: {
    icon: 'cloud_queue',
  },
  component: lazyLoading('dashboard', true),
};
