<template>
  <v-layout
    class="ml-4 mr-4"
    wrap
    row>
    <v-flex xs12>
      <h3>
        Application Layout
      </h3>
    </v-flex>
    <!-- sidebar -->
    <v-flex class="mt-3" xs12>
      <h5 class="subheading">Sidebar</h5>
    </v-flex>
    <v-flex xs6>
      <v-switch
        label="Mini Variant"
        v-model="miniVariantSidebar">
      </v-switch>
    </v-flex>
    <v-flex xs6>
      <v-switch
        label="Clipped"
        v-model="clippedSidebar">
      </v-switch>
    </v-flex>
    <!-- navbar -->
    <v-flex class="mt-3" xs12>
      <h5 class="subheading">Navbar</h5>
    </v-flex>
    <v-flex xs6>
      <v-switch
        label="Fixed"
        v-model="absoluteNavbar">
      </v-switch>
    </v-flex>
    <v-flex xs6>
      <v-switch
        label="Clipped Left"
        v-model="clippedLeftNavbar">
      </v-switch>
    </v-flex>
    <!-- footer -->
    <v-flex class="mt-3" xs12>
      <h5 class="subheading">Footer</h5>
    </v-flex>
    <v-flex xs6>
      <v-switch
        label="Disable Fixed"
        v-model="absoluteFooter">
      </v-switch>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// TODO ADD vuex actiosn here and keep it encapsulated then use get and set methods for each
// vuex state.

export default {
  name: 'LayoutOptions',
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      'updateSidebarMiniVariant',
      'updateSidebarClipped',
      'updateNavbarAbsolute',
      'updateNavbarClippedLeft',
      'updateFooterAbsolute',
    ]),
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'navbar',
      'footer',
    ]),
    // Sidebar
    miniVariantSidebar: {
      get() {
        return this.sidebar.miniVariant;
      },
      set(state) {
        this.updateSidebarMiniVariant(state);
      },
    },
    clippedSidebar: {
      get() {
        return this.sidebar.clipped;
      },
      set(state) {
        this.updateSidebarClipped(state);
      },
    },
    // navbar
    absoluteNavbar: {
      get() {
        // Absolute === true means it remains on bottom of page
        // Otherwise it is fixed as part of the application
        // https://github.com/vuetifyjs/vuetify/issues/2938
        return this.navbar.absolute;
      },
      set(state) {
        this.updateNavbarAbsolute(state);
      },
    },
    clippedLeftNavbar: {
      get() {
        return this.navbar.clippedLeft;
      },
      set(state) {
        this.updateNavbarClippedLeft(state);
      },
    },
    absoluteFooter: {
      get() {
        return this.footer.absolute;
      },
      set(state) {
        this.updateFooterAbsolute(state);
      },
    },
  },
};
</script>

<style scoped>
  .switch label {
    font-size: 14px;
  }
</style>
