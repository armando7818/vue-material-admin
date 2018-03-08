<template>
  <!-- https://github.com/vuetifyjs/docs/blob/master/examples/layouts/google-contacts.vue -->
  <v-toolbar
    dark
    color="indigo"
    :clipped-left="navbar.clippedLeft"
    :absolute="!navbar.absolute"
    app>
    <v-toolbar-side-icon
      @click.stop="toggleSidebar">
    </v-toolbar-side-icon>
    <v-toolbar-title v-text="navbar.title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      icon
      @click.stop="toggleConfigurator"
    >
      <v-icon>settings</v-icon>
    </v-btn>
    <v-menu
      class="mr-2"
      transition="slide-y-transition"
      bottom
      left
      offset-y>
      <v-btn icon slot="activator">
        <v-icon large>account_circle</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          @click=""
          v-for="item in items"
          :key="item.title">
          <v-list-tile-content class="pr-2">
            <v-icon medium>{{ item.action }}</v-icon>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
    <!-- <v-btn
      slot="activator"
      large
      icon>
        <v-icon large>account_circle</v-icon>
    </v-btn> -->
  </v-toolbar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        items: [
          {
            title: 'Logout',
            action: 'lock_outline',
          },
        ],
      };
    },
    methods: {
      ...mapActions([
        'toggleSidebar',
        'toggleConfigurator',
      ]),
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'navbar',
      ]),
    },
  };

</script>

<style>

</style>
