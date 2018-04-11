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
      path: '/',
      meta: {
        name: () => 'Dashboard',
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
