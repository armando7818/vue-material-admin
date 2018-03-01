<template>
  <v-navigation-drawer
    temporary
    absolute
    right
    class="grey lighten-4"
    :width="sidebarWidth"
    v-model="opened"
    enable-resize-watcher>
    <v-btn @click="closeConfigurator" class="close-button" flat icon>
      <v-icon>clear</v-icon>
    </v-btn>
    <v-container class="mt-3">
      <v-layout
        class="ml-4 mr-4"
        wrap
        row>
        <v-flex xs12>
          <h1>
            Configurator
          </h1>
          <p>
            Configure the layout and color theme of the application.
          </p>
        </v-flex>
      </v-layout>
      <div class="ma-4">
        <v-divider></v-divider>
      </div>
      <layout-options></layout-options>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
  // NOTE https://github.com/pablohpsilva/vuejs-component-style-guide
  import { mapGetters, mapActions } from 'vuex';
  import LayoutOptions from './components/LayoutOptions';

  export default {
    name: 'Configurator',
    data() {
      return {
        sidebarWidth: '500',
      };
    },
    components: {
      LayoutOptions,
    },
    methods: {
      ...mapActions([
        'updateConfigurator',
      ]),
      closeConfigurator() {
        this.updateConfigurator(false);
      },
    },
    computed: {
      ...mapGetters([
        'configurator',
      ]),
      opened: {
        get() {
          return this.configurator.opened;
        },
        set(openedStatus) {
          this.updateConfigurator(openedStatus);
        },
      },
    },
  };

</script>

<style>
  .close-button {
    position: absolute;
    right: 0px;
  }
</style>
