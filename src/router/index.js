import Vue from 'vue';
import Router from 'vue-router';
import Menu from 'vuex-store/modules/menu';

Vue.use(Router);

// Menu should have 2 levels.
function generateRoutesFromMenu(menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i += 1) {
    const item = menu[i];
    if (item.path) {
      routes.push(item);
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes);
    }
  }
  return routes;
}

export default new Router({
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...generateRoutesFromMenu(Menu.state.items),
    {
      path: '*',
      redirect: '/',
    },
  ],
});
