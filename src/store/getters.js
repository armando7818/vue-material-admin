const pkg = state => state.pkg;
const app = state => state.app;
const sidebar = state => state.app.sidebar;
const navbar = state => state.app.navbar;
const configurator = state => state.app.configurator;
const footer = state => state.app.footer;
const menuitems = state => state.menu.items;
const componententry = state => state.menu.items.filter(c => c.meta && c.meta.label === 'Components')[0];

export {
  pkg,
  app,
  sidebar,
  navbar,
  configurator,
  footer,
  menuitems,
  componententry,
};
