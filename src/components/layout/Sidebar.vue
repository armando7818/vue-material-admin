<template>
  <v-navigation-drawer
    persistent
    absolute
    :mini-variant.sync="miniVariantSidebar"
    :clipped="sidebar.clipped"
    :value="sidebar.opened"
    enable-resize-watcher
    app
  >
    <!-- <v-list-group
            v-model="item.active"
            v-for="item in items"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group> -->
    <v-list
      dense>
      <template 
        v-for="(item, index) in menuitems"
      >
        <v-list-group
          v-if="item.children"
          no-action
          :group="item.path"
          :value="item.meta.expanded"
          :prepend-icon="item.meta.icon"
          @click="toggleMenu(item, index)"
          :key="item.name">
          <!-- https://vuetifyjs.com/components/lists -->
          <!-- Make sure inactive works for manually opening list -->
          <v-list-tile
            slot="activator"
            :exact="true"
            :inactive="!item.path && item.path.length === 0"
            >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="child in item.children"
            :key="child.name"
            :to="generatePath(item, child)"
            :exact="true"
            >
            <v-list-tile-content>
              <v-list-tile-title>{{ child.name }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="child.meta.icon">
              <v-icon>{{ child.meta.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
          v-else
          :key="item.name"
          :to="item.path"
          :inactive="!item.path && item.path.length === 0"
          :exact="true"
          @click="toggleMenu(item, index)">
          <v-list-tile-action>
            <v-icon>{{ item.meta.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    mounted() {
      const route = this.$route;
      debugger;
      if (route.meta &&
        Object.prototype.hasOwnProperty.call(route.meta, 'expanded')) {
        this.expandMatchedMenuList(route);
      }
    },
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
      toggleSidebar() {
        this.updateSidebar(!this.sidebar.opened);
      },
      expandMatchedMenuList(route) {
        return route;
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
    },
    watch: {
      $route(route) {
        this.expandMatchedMenuList(route);
      },
    },
  };

</script>

<style>

</style>
