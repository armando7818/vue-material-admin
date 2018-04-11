import * as types from '../../mutation-types';
import lazyLoading from './lazyLoading';
import axios from './axios';
import forms from './forms';
import graphs from './graphs';

const state = {
  items: [
    {
      path: '/',
      name: 'Dashboard',
      meta: {
        name: () => 'Dashboard',
        icon: 'business_center',
      },
      component: lazyLoading('dashboard', true),
    },
    axios,
    forms,
    graphs,
  ],
};

const mutations = {
  [types.EXPAND_MENU](menuState, menuItem) {
    const stateToModify = menuState;
    const menuItemToModify = menuItem;
    if (menuItemToModify.index > -1) {
      stateToModify.items.forEach((item, index) => {
        if (item.meta && 'expanded' in item.meta) {
          if (index === menuItemToModify.index) {
            stateToModify.items[index].meta.expanded = menuItemToModify.expanded;
          } else {
            stateToModify.items[index].meta.expanded = false;
          }
        }
      });
    } else if (menuItemToModify.item.meta
      && 'expanded' in menuItemToModify.item.meta) {
      menuItemToModify.item.meta.expanded = menuItemToModify.expanded;
    }
  },
};

export default {
  state,
  mutations,
};
