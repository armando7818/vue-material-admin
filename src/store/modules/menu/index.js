import * as types from '../../mutation-types';
import lazyLoading from './lazyLoading';
import axios from './axios';
import elements from './elements';
import forms from './forms';
import tables from './tables';
import graphs from './graphs';
import pages from './pages';

// show: meta.label -> name
// name: component name
// meta.label: display label
/*
// http://d335etuyc199v1.cloudfront.net/
http://preview.themeforest.net/item/material-design-reactjs-admin-web-app-with-bootstrap-4/full_screen_preview/19582625?_ga=2.236410561.1936217708.1509822733-913885259.1502817304
*/

// TODO Add multiple menu layers deep
const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/',
      meta: {
        icon: 'business_center',
      },
      component: lazyLoading('dashboard', true),
    },
    axios,
    elements,
    forms,
    tables,
    graphs,
    pages,
  ],
};

const mutations = {
  [types.EXPAND_MENU](menuState, menuItem) {
    const stateToModify = menuState;
    const menuItemToModify = menuItem;
    if (menuItemToModify.index > -1) {
      if (stateToModify.items[menuItemToModify.index] &&
        stateToModify.items[menuItemToModify.index].meta) {
        stateToModify.items[menuItemToModify.index].meta.expanded = menuItemToModify.expanded;
      }
    } else if (menuItemToModify.item && 'expanded' in menuItemToModify.item.meta) {
      menuItemToModify.item.meta.expanded = menuItemToModify.expanded;
    }
  },
};

export default {
  state,
  mutations,
};
