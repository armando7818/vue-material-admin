import * as types from './mutation-types';

function isBoolean(paramToTest) {
  return typeof paramToTest === 'boolean';
}

export const toggleSidebar = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_SIDEBAR, config);
  }
};

export const updateSidebar = ({ commit }, openedStatus) => {
  if (isBoolean(openedStatus)) {
    commit(types.UPDATE_SIDEBAR, openedStatus);
  }
};

export const toggleSidebarClipped = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_SIDEBAR_CLIPPED, config);
  }
};

export const updateSidebarClipped = ({ commit }, clippedStatus) => {
  if (isBoolean(clippedStatus)) {
    commit(types.UPDATE_SIDEBAR_CLIPPED, clippedStatus);
  }
};

export const toggleSidebarMiniVariant = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_SIDEBAR_MINI_VARIANT, config);
  }
};

export const updateSidebarMiniVariant = ({ commit }, miniVariant) => {
  if (isBoolean(miniVariant)) {
    commit(types.UPDATE_SIDEBAR_MINI_VARIANT, miniVariant);
  }
};

export const expandMenu = ({ commit }, menuItem) => {
  const stateToMutate = menuItem;
  if (stateToMutate) {
    stateToMutate.expanded = menuItem.expanded || false;
    commit(types.EXPAND_MENU, stateToMutate);
  }
};

export const toggleNavbarAbsolute = ({ commit }, status) => {
  commit(types.TOGGLE_NAVBAR_ABSOLUTE, status);
};

export const updateNavbarAbsolute = ({ commit }, navbarAbsolute) => {
  if (isBoolean(navbarAbsolute)) {
    commit(types.UPDATE_NAVBAR_ABSOLUTE, navbarAbsolute);
  }
};

export const toggleNavbarClippedLeft = ({ commit }, status) => {
  commit(types.TOGGLE_NAVBAR_CLIPPED_LEFT, status);
};

export const updateNavbarClippedLeft = ({ commit }, navbarClippedLeft) => {
  if (isBoolean(navbarClippedLeft)) {
    commit(types.UPDATE_NAVBAR_CLIPPED_LEFT, navbarClippedLeft);
  }
};

export const toggleConfigurator = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_CONFIGURATOR, config);
  }
};

export const updateConfigurator = ({ commit }, opened) => {
  if (isBoolean(opened)) {
    commit(types.UPDATE_CONFIGURATOR, opened);
  }
};

export const toggleFooterAbsolute = ({ commit }, status) => {
  commit(types.TOGGLE_FOOTER_ABSOLUTE, status);
};

export const updateFooterAbsolute = ({ commit }, absolute) => {
  if (isBoolean(absolute)) {
    commit(types.UPDATE_FOOTER_ABSOLUTE, absolute);
  }
};
