import * as types from '../mutation-types';

const state = {
  sidebar: {
    opened: false,
    clipped: true,
    miniVariant: false,
    absolute: false,
  },
  // TODO: Need to put title here or an image.
  // Maybe remove clipped left if you have an image and remove it based
  // on whether it's and image or text. If Neither, then remove it.
  navbar: {
    logo: '',
    title: 'Armando Custom Admin Theme',
    absolute: true,
    clippedLeft: true,
  },
  configurator: {
    opened: false,
  },
  footer: {
    absolute: false,
    text: '&copy; Vue Material Admin Example',
  },
};

const mutations = {
  // Sidebar mutations
  [types.TOGGLE_SIDEBAR](appState) {
    const stateToMutate = appState;
    stateToMutate.sidebar.opened = !appState.sidebar.opened;
  },
  [types.UPDATE_SIDEBAR](appState, openedStatus) {
    const stateToMutate = appState;
    stateToMutate.sidebar.opened = openedStatus;
  },
  [types.TOGGLE_SIDEBAR_CLIPPED](appState) {
    const stateToMutate = appState;
    stateToMutate.sidebar.clipped = !appState.sidebar.clipped;
  },
  [types.UPDATE_SIDEBAR_CLIPPED](appState, clippedStatus) {
    const stateToMutate = appState;
    stateToMutate.sidebar.clipped = clippedStatus;
  },
  [types.TOGGLE_SIDEBAR_MINI_VARIANT](appState) {
    const stateToMutate = appState;
    stateToMutate.sidebar.miniVariant = !appState.sidebar.miniVariant;
  },
  [types.UPDATE_SIDEBAR_MINI_VARIANT](appState, miniVariant) {
    const stateToMutate = appState;
    stateToMutate.sidebar.miniVariant = miniVariant;
  },
  // Navbar mutations
  [types.TOGGLE_NAVBAR_ABSOLUTE](appState) {
    const stateToMutate = appState;
    stateToMutate.navbar.absolute = !appState.navbar.absolute;
  },
  [types.UPDATE_NAVBAR_ABSOLUTE](appState, navbarAbsolute) {
    const stateToMutate = appState;
    stateToMutate.navbar.absolute = navbarAbsolute;
  },
  [types.TOGGLE_NAVBAR_CLIPPED_LEFT](appState) {
    const stateToMutate = appState;
    stateToMutate.navbar.clippedLeft = !appState.navbar.clippedLeft;
  },
  [types.UPDATE_NAVBAR_CLIPPED_LEFT](appState, navbarClippedLeft) {
    const stateToMutate = appState;
    stateToMutate.navbar.clippedLeft = navbarClippedLeft;
  },
  [types.TOGGLE_FOOTER_ABSOLUTE](appState) {
    const stateToMutate = appState;
    stateToMutate.footer.absolute = !appState.footer.absolute;
  },
  [types.UPDATE_FOOTER_ABSOLUTE](appState, absolute) {
    const stateToMutate = appState;
    stateToMutate.footer.absolute = absolute;
  },
  [types.TOGGLE_CONFIGURATOR](appState) {
    const stateToMutate = appState;
    stateToMutate.configurator.opened = !appState.configurator.opened;
  },
  [types.UPDATE_CONFIGURATOR](appState, opened) {
    const stateToMutate = appState;
    stateToMutate.configurator.opened = opened;
  },
};

export default {
  state,
  mutations,
};
