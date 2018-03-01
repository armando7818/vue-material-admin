import * as types from '../mutation-types';

const state = {
  sidebar: {
    opened: false,
    clipped: true,
    miniVariant: false,
  },
  // TODO: Need to put title here or an image.
  // Maybe remove clipped left if you have an image and remove it based
  // on whether it's and image or text. If Neither, then remove it.
  navbar: {
    logo: '',
    title: 'Armando Custom Admin Theme',
    fixed: true,
    clippedLeft: true,
  },
  configurator: {
    opened: false,
  },
  footer: {
    fixed: false,
    text: '',
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
  [types.TOGGLE_NAVBAR_FIXED](appState) {
    const stateToMutate = appState;
    stateToMutate.navbar.fixed = !appState.navbar.fixed;
  },
  [types.UPDATE_NAVBAR_FIXED](appState, navbarFixed) {
    const stateToMutate = appState;
    stateToMutate.navbar.fixed = navbarFixed;
  },
  [types.TOGGLE_NAVBAR_CLIPPED_LEFT](appState) {
    const stateToMutate = appState;
    stateToMutate.navbar.clippedLeft = !appState.navbar.clippedLeft;
  },
  [types.UPDATE_NAVBAR_CLIPPED_LEFT](appState, navbarClippedLeft) {
    const stateToMutate = appState;
    stateToMutate.navbar.clippedLeft = navbarClippedLeft;
  },
  [types.TOGGLE_FOOTER_FIXED](appState) {
    const stateToMutate = appState;
    stateToMutate.footer.fixed = !appState.footer.fixed;
  },
  [types.UPDATE_FOOTER_FIXED](appState, fixed) {
    const stateToMutate = appState;
    stateToMutate.footer.fixed = fixed;
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
