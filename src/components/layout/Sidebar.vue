<template>
  <v-navigation-drawer
    persistent
    :absolute="sidebar.absolute"
    :mini-variant.sync="miniVariantSidebar"
    :clipped="sidebar.clipped"
    v-model="sidebarOpenedStatus"
    enable-resize-watcher
    app
  >
    <!-- TODO: Finish sidebar with parent with no registered route-->
    <v-list
      dense>
      <template 
        v-for="(item, index) in menuitems"
      >
        <v-list-group
          v-if="isDropdownList(item)"
          no-action
          :group="item.path"
          :value="item.meta.expanded"
          :prepend-icon="item.meta.icon"
          @click="toggleMenu(item, index)"
          :key="item.meta.icon">
          <v-list-tile
            slot="activator"
            :exact="true"
            :inactive="isInactive(item)"
            >
            <v-list-tile-content>
              <v-list-tile-title>{{ getMenuItemName(item) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="child in item.children"
            v-if="child.path"
            :key="child.path"
            :to="generatePath(item, child)"
            exact
            >
            <v-list-tile-content>
              <v-list-tile-title>{{ getMenuItemName(child) }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="child.meta.icon">
              <v-icon>{{ child.meta.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
          v-else
          :key="item.meta.icon"
          :to="item.path"
          :inactive="!item.path && item.path.length === 0"
          exact
          @click="toggleMenu(item, index)">
          <v-list-tile-action>
            <v-icon>{{ item.meta.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ getMenuItemName(item) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'updateSidebar',
        'expandMenu',
        'updateSidebarMiniVariant',
      ]),
      // TODO: this might not be needed because of the grouping feature.
      generatePath(item, subItem) {
        const parentPath = `${item.path}/`;
        return `${item.component ? parentPath : ''}${subItem.path}`;
      },
      toggleMenu(item, index) {
        this.expandMenu({
          item,
          expanded: !item.meta.expanded,
          index,
        });
      },
      // toggleSidebar() {
      //   this.updateSidebar(!this.sidebar.opened);
      // },
      expandMatchedMenuList(route) {
        const matched = route.matched;
        const lastMatched = matched[matched.length - 1];
        let parent = lastMatched.parent || lastMatched;
        const isParent = parent === lastMatched;

        if (isParent) {
          const p = this.findParentFromMenu(route);
          if (p) {
            parent = p;
          }
        }

        if ('expanded' in parent.meta && !isParent) {
          this.expandMenu({
            item: parent,
            expanded: true,
          });
        }
      },
      findParentFromMenu(route) {
        const menu = this.menuitems;
        for (let i = 0, l = menu.length; i < l; i += 1) {
          const item = menu[i];
          const k = item.children && item.children.length;
          if (k) {
            for (let j = 0; j < k; j += 1) {
              if (item.children[j].name === route.name) {
                return item;
              }
            }
          }
        }
        return '';
      },
      isDropdownList(parentItem) {
        return Object.prototype.hasOwnProperty.call(parentItem.meta, 'expanded');
      },
      getMenuItemName(item) {
        return item.name || item.meta.name();
      },
      isInactive(item) {
        let menuItemInactive = true;

        if(!('path' in item)) {
          menuItemInactive = false;
        } else {
          menuItemInactive = !item.path && item.path.length === 0;
        }

        return menuItemInactive;
      },
    },
    // TODO: need to add an expand menu function so the model is not modified directly
    computed: {
      ...mapGetters([
        'sidebar',
        'menuitems',
      ]),
      miniVariantSidebar: {
        get() {
          return this.sidebar.miniVariant;
        },
        set(state) {
          this.updateSidebarMiniVariant(state);
        },
      },
      sidebarOpenedStatus: {
        get() {
          return this.sidebar.opened;
        },
        set(state) {
          this.updateSidebar(state);
        },
      },
    },
    watch: {
      $route(route) {
        if (route.meta &&
          Object.prototype.hasOwnProperty.call(route.meta, 'expanded')) {
          this.expandMatchedMenuList(route);
        } else if (route.name) {
          this.expandMatchedMenuList(route);
        }
      },
    },
  };

</script>

<style>

</style>
